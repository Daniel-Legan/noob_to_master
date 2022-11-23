const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
    rejectUnauthenticated,
} = require('../modules/authentication-middleware');

router.get('/', rejectUnauthenticated, (req, res) => {
    // return masters
    const queryText = `
                        SELECT 
                            masters.id, 
                            masters.username, 
                            masters.lat, 
                            masters.lng, 
                            masters.game_id, 
                            masters.noob_or_master, 
                            games.title,
                            games.logo AS games_logo
                        FROM users masters
                        JOIN games
                            ON masters.game_id = games.id
                        LEFT JOIN connections
                            ON connections.master_id = masters.id
                        WHERE masters.noob_or_master = 'master'
                        GROUP BY masters.id, games.title, games.logo
                        HAVING count(connections.id) FILTER (WHERE noob_id = $1) = 0;
                    `;
    pool
        .query(queryText, [req.user.id])
        .then((result) => {
            res.send(result.rows);
        })
        .catch((error) => {
            console.log(`Error on query ${error}`);
            res.sendStatus(500);
        });
});

module.exports = router;
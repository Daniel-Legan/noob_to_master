const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
    rejectUnauthenticated,
} = require('../modules/authentication-middleware');

router.get('/', rejectUnauthenticated, (req, res) => {
    // console.log(req.user.id);
    // return invites
    const queryText = `
                        SELECT 
                            connections.id, 
                            noob_id, 
                            phone, 
                            noob_message, 
                            status, 
                            username AS noob_username, 
                            title, 
                            noob_or_master,
                            games.logo AS games_logo
                        FROM connections
                        JOIN users ON connections.noob_id = users.id
                        JOIN games ON users.game_id = games.id
                        WHERE master_id = $1
                        ORDER BY connections.id;
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
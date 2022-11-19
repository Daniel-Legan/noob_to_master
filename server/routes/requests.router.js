const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
    rejectUnauthenticated,
} = require('../modules/authentication-middleware');

router.get('/', rejectUnauthenticated, (req, res) => {
    // return requests
    const queryText = `
                        SELECT connections.id, master_id, phone, status, username AS master_username, title, noob_or_master
                        FROM connections
                        JOIN users ON connections.master_id = users.id
                        JOIN games ON users.game_id = games.id
                        WHERE noob_id = $1
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
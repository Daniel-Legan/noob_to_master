const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
    rejectUnauthenticated,
} = require('../modules/authentication-middleware');

router.get('/', rejectUnauthenticated, (req, res) => {
    // console.log(req.user.id);
    // return requests
    const queryText = `
                        SELECT connections.id, master_id, master_message, status, is_cleared_by_noob, is_cleared_by_master, username AS master_username, title
                        FROM connections
                        JOIN users ON connections.master_id = users.id
                        JOIN games ON users.game_id = games.id
                        WHERE noob_id = $1
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
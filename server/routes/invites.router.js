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
                        SELECT connections.id, noob_id, noob_message, master_message, status, is_cleared_by_noob, is_cleared_by_master, username AS noob_username, title, noob_or_master
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

router.put('/:id', rejectUnauthenticated, (req, res) => {

    const queryText = `UPDATE "connections" SET "is_cleared_by_master" = TRUE WHERE id = $1;`;
    const sqlParams = [req.params.id];

    pool.query(queryText, sqlParams)
        .then(dbRes => {

            res.sendStatus(201);
        })
        .catch(err => {
            console.error('PUT error', req.params.id, err);
            res.sendStatus(500);
        })
});

module.exports = router;
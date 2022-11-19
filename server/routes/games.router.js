const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
    rejectUnauthenticated,
} = require('../modules/authentication-middleware');


router.get('/', (req, res) => {
    // return all games
    const queryText = `SELECT * FROM games ORDER BY title ASC`;
    pool
        .query(queryText)
        .then((result) => {
            res.send(result.rows);

        })
        .catch((error) => {
            console.log(`Error on query ${error}`);
            res.sendStatus(500);
        });
});

module.exports = router;
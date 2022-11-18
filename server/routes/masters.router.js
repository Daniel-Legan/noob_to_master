const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', (req, res) => {
    // return masters
    const queryText = `
                    SELECT username, lat, lng, noob_or_master, title, game_id, users.id
                    FROM users
                    JOIN games ON users.game_id = games.id
                    WHERE noob_or_master = 'master';`;
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
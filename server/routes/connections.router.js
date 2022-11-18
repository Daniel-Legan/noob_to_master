const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.post('/', (req, res) => {
    
    if (req.isAuthenticated()) {

        console.log('is authenticated?', req.isAuthenticated());
        console.log('user', req.user);
        const sqlText = `INSERT INTO "connections" ("noob_id", "master_id", "noob_message")
                        VALUES ($1, $2, $3);`;
        const sqlParams = [req.body.noob_id, req.body.master_id, req.body.noob_message]
        pool.query(sqlText, sqlParams)
            .then(dbRes => {
                res.sendStatus(201);
            })
            .catch(error => {
                console.error('error in adding connection', error);
                res.sendStatus(500);
            });
    }
    else {
        res.sendStatus(403);
    }
});

module.exports = router;
const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
    rejectUnauthenticated,
} = require('../modules/authentication-middleware');

router.put('/:id', rejectUnauthenticated, (req, res) => {
    const queryText = `UPDATE "connections" SET "status" = $1 WHERE id = $2;`;
    const sqlParams = [req.body.newStatus, req.params.id];

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
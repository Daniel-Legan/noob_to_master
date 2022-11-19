const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
    rejectUnauthenticated,
} = require('../modules/authentication-middleware');

router.delete('/:id', rejectUnauthenticated, (req, res) => {
    console.log(req.params.id);
    const sqlText = `
                    DELETE FROM "connections"
                    WHERE id = $1;
                    `;
    const sqlParams = [req.params.id]

    pool.query(sqlText, sqlParams)
        .then(() => res.sendStatus(200))
        .catch((error) => {
            console.log('error in delete.router', error)
            res.sendStatus(500);
        });
});

module.exports = router;
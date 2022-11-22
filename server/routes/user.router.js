const express = require('express');
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');
const userStrategy = require('../strategies/user.strategy');

const router = express.Router();

// Handles Ajax request for user information if user is authenticated
router.get('/', rejectUnauthenticated, (req, res) => {
  // Send back user object from the session (previously queried from the database)
  res.send(req.user);
});

router.get('/:id', rejectUnauthenticated, (req, res) => {
  const id = req.params.id;

  const sqlText = `
                    SELECT * FROM users 
                    WHERE id = $1
                  `;
  const sqlParams = [id];
  pool.query(sqlText, sqlParams)
    .then((result) => {
      res.send(result.rows[0]);
    })
    .catch((error) => {
      console.log(`Error making database query ${sqlText}`, error);
      res.sendStatus(500);
    });
});

router.put('/:id', rejectUnauthenticated, (req, res) => {
  // Update this single user
  const idToUpdate = req.params.id;

  const sqlText = `UPDATE users SET game_id = $1, noob_or_master = $2 WHERE id = $3`;
  pool.query(sqlText, [req.body.game_id, req.body.noob_or_master, idToUpdate])
    .then((result) => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log(`Error making database query ${sqlText}`, error);
      res.sendStatus(500);
    });
});

// Handles POST request with new user data
// The only thing different from this and every other post we've seen
// is that the password gets encrypted before being inserted
router.post('/register', (req, res, next) => {

  const username = req.body.username;
  const password = encryptLib.encryptPassword(req.body.password);
  const address = req.body.address;
  const lat = req.body.lat;
  const lng = req.body.lng;
  const game_id = req.body.game;
  const phone = req.body.phone;
  const noob_or_master = req.body.noobOrMaster;

  const queryText = `
                      INSERT INTO "users" (username, password, address, phone, lat, lng, game_id, noob_or_master)
                      VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING id;
                    `;
  pool
    .query(queryText, [username, password, address, phone, lat, lng, game_id, noob_or_master])
    .then(() => res.sendStatus(201))
    .catch((err) => {
      console.log('User registration failed: ', err);
      res.sendStatus(500);
    });
});

// Handles login form authenticate/login POST
// userStrategy.authenticate('local') is middleware that we run on this route
// this middleware will run our POST if successful
// this middleware will send a 404 if not successful
router.post('/login', userStrategy.authenticate('local'), (req, res) => {
  res.sendStatus(200);
});

// clear all server session information about this user
router.post('/logout', (req, res) => {
  // Use passport's built-in method to log out the user
  req.logout();
  res.sendStatus(200);
});

module.exports = router;

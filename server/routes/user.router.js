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
  const noob_or_master = req.body.noobOrMaster;
  console.log('the username is', username);
  console.log('the password is', password);
  console.log('the address is', address);
  console.log('the lat is', lat);
  console.log('the lng is', lng);
  console.log('the game_id is', game_id);
  console.log('the noob_or_master is', noob_or_master);

  const queryText = `INSERT INTO "users" (username, password, address, lat, lng, game_id, noob_or_master)
    VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING id`;
  pool
    .query(queryText, [username, password, address, lat, lng, game_id, noob_or_master])
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

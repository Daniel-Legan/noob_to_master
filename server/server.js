const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

const sessionMiddleware = require('./modules/session-middleware');
const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');
const gamesRouter = require('./routes/games.router');
const mastersRouter = require('./routes/masters.router');
const connectionsRouter = require('./routes/connections.router');
const invitesRouter = require('./routes/invites.router');
const requestsRouter = require('./routes/requests.router');
const statusRouter = require('./routes/status.router');
const deleteRouter = require('./routes/delete.router');

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);
app.use('/api/games', gamesRouter);
app.use('/api/masters', mastersRouter);
app.use('/api/connections', connectionsRouter);
app.use('/api/invites', invitesRouter);
app.use('/api/requests', requestsRouter);
app.use('/api/status', statusRouter);
app.use('/api/delete', deleteRouter);

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});

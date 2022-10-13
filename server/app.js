const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

// Built in middleware
app.use(express.json());
app.use(cookieParser());

// App routes
app.use('/api/v1/users', require('./controllers/users'));

// Error handling & 404 middleware for when
// a request doesn't match any app routes
app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

const pool = require('./utils/pool');

const API_URL = process.env.API_URL || 'http://localhost';
const PORT = process.env.PORT || 7890;

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`🚀  Server started on ${API_URL}:${PORT}`);
});

process.on('exit', () => {
  // eslint-disable-next-line no-console
  console.log('👋  Goodbye!');
  pool.end();
});

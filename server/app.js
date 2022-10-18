require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const hostStatic = process.env.HOST_STATIC != 'false';
const app = express();
const path = require('path');
// Built in middleware
app.use(express.json());
app.use(cookieParser());

if(hostStatic) {
  const staticPath = path.resolve(__dirname + '/../dist');
  console.log(staticPath);
  app.use('', express.static(staticPath));
}

// App routes
app.use('/api/v1/users', require('./controllers/users'));
app.use('/api/v1/parks', require('./controllers/parks'));
app.use('/api/v1/dogs', require('./controllers/dogs'));
// Error handling & 404 middleware for when
// a request doesn't match any app routes
// app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

app.get('/*', (req, res) => {
  res.sendFile(path.resolve (__dirname + '/../dist/index.html'));
});

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

/* eslint-disable no-console */
const pool = require('./server/utils/pool');
const setup = require('./Data/setup');

setup(pool)
  .catch((err) => console.error(err))
  .finally(() => process.exit());

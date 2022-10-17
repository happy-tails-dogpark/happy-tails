const { Router } = require('express');

const { getYelp } = require('../utils/fetch-utils');
require('dotenv').config();

module.exports = Router()
  .get('/', async (req, res, next) => {
    try {
      const data = await getYelp(req.query.location);
      //   console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaa', data);
      //   JSON.stringify(data);
      res.json(data);
    } catch (e) {
      next(e);
    }
  });

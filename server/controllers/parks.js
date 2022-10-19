const { Router } = require('express');

const { getYelp, getYelpById } = require('../utils/fetch-utils');
require('dotenv').config();

module.exports = Router()
  .get('/', async (req, res, next) => {
    try {
      const data = await getYelp(req.query.location);
      res.json(data);
    } catch (e) {
      next(e);
    }
  })
  .get('/:id', async (req, res, next) => {
    try {
      const data = await getYelpById(req.params.id);
      res.json(data);
    } catch (e) {
      next(e);
    }
  });

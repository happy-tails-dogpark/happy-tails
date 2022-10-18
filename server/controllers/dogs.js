/* eslint-disable max-len */
const { Router } = require('express');
// const authenticate = require('../middleware/authenticate');
// const authorize = require('../middleware/authorize');
const Dog = require('../models/Dog');

// eslint-disable-next-line no-undef
module.exports = Router()
  .get('/', async (req, res) => {
    const puppies = await Dog.getAllDogs();
    res.json(puppies);
  })
  .get('/:id', async (req, res) => {
    const puppy = await Dog.getDogById(req.params.id);
    res.json(puppy);
  })
  .post('/', async (req, res, next) => {
    try {
      const data = await Dog.addDog(req.body);
      res.json(data);
    } catch (e) {
      next(e);
    }
  });

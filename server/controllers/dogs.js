/* eslint-disable max-len */
const { Router } = require('express');
const authenticate = require('../middleware/authenticate');
// const authorize = require('../middleware/authorize');
const Dog = require('../models/Dog');

// eslint-disable-next-line no-undef
module.exports = Router()
  .get('/', async (req, res) => {
    const puppies = await Dog.getAllDogs();
    res.json(puppies);
  })
  .get('/profile', authenticate, async (req, res) => {
    console.log('RU', req.user);
    const profile = await Dog.getProfileById(req.user.id);
    res.json(profile);
  })
  .get('/:id', async (req, res) => {
    const puppy = await Dog.getDogById(req.params.id);
    res.json(puppy);
  })
  .post('/profile', authenticate, async (req, res, next) => {
    try {
      const data = await Dog.addDog(req.body, req.user);
      res.json(data);
    } catch (e) {
      next(e);
    }
  })
;

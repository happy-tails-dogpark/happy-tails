const { Park } = require('../models/Park');
const { Router } = require('express');

module.exports = Router()
.get('/', async (req, res, next) => {
    try {
        const data = await Park.getAll();
        res.json(data);
    } catch (e) {
        next(e)
    }
})
.get('/:id', async (req, res, next) => {
    try {
        const data = await Park.getById(req.params.id);
        if(!data) {
            next();
        } res.json(data);
     } catch (e) {
        next(e)
     }
});
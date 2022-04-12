const router = require('express').Router();
const fetch = require ('node-fetch');
const sequelize = require('sequelize');
const Op = sequelize.Op;
const { Breed, Temper } = require('../db.js');

router.post('/', async function(req, res, next){
    try {
        const {name, height, weight, life_span, temperaments} = req.body;
        const [breed, createdB] = await Breed.findOrCreate({ 
            where: {
                name,
                height,
                weight,
                life_span,
            }
        });
        await breed.increment({ 'id': 1000 });
        const [temper, createdT] = await Temper.findOrCreate({ 
            where: {
                name: temperaments,
            }
        });

        await breed.addTempers(temper);

        res.status(201).json('Nueva raza creada con éxito');
        
    } catch (error) {
        next(error);
    }
});

module.exports = router;
const router = require('express').Router();
const fetch = require ('node-fetch');
const sequelize = require('sequelize');
const Op = sequelize.Op;
const { Breed, Temper } = require('../db.js');

router.post('/', async function(req, res, next){
    try {
        const {name, height, weight, life_span, image, temperaments} = req.body;
        let newTemperaments = [];
        
        if(!Array.isArray(temperaments)) {
            newTemperaments = temperaments.split(',').map(temper => {return temper.trim()}).sort().filter(temper => temper !=='');
        } else {
            newTemperaments = temperaments;
        }
        
        const [breed, createdB] = await Breed.findOrCreate({ 
            where: {
                name,
                height,
                weight,
                life_span,
                image,
            }
        });
        
        createdB ? await breed.increment({ 'id': 1000 }) : null;
        
        for (let i=0; i<newTemperaments.length; i++) {
            const [temper, createdT] = await Temper.findOrCreate({ 
                where: {
                    name: newTemperaments[i],
                }
            });
            await breed.addTempers(temper);
        }

        createdB    ? res.status(201).json({newBreed: 'New breed added to database!'})
                    : res.status(201).json({newBreed: 'Sorry, new breed not added. There is already a breed matching yours', data: breed});

    } catch (error) {
        next(error);
    }
});

module.exports = router;
const router = require('express').Router();
const fetch = require ('node-fetch');
const sequelize = require('sequelize');
const Op = sequelize.Op;
const { Breed, Temper } = require('../db.js');

// --------------- PARA  get /dogs/{idRaza} ----------
router.get('/:idBreed', async function(req, res, next){
    try {
        const { idBreed } = req.params;
        const idBreedDB = await Breed.findByPk(idBreed, {
                                        include: Temper  
        });
        const allBreedsAPI = await fetch (`https://api.thedogapi.com/v1/breeds`).then(result => result.json());
        const idBreedAPI = allBreedsAPI.filter(breed => breed.id === parseInt(idBreed));
        let finalResult= [];
        if (!idBreedDB && !idBreedAPI) return res.status(404).send('Lo sentimos, no existe información de la raza solicitada'); 
        if (idBreedDB) { 
            let {name, weight, height, temperament, life_span} = idBreedDB[0];
            finalResult.push({name, weight, height, temperament, life_span, image});
            return res.json(finalResult);
        } else {
            let {name, weight, height, temperament, life_span, image} = idBreedAPI[0];
            finalResult.push({name, weight: weight.metric, height: height.metric, temperament, life_span, image:image.url});
            return res.json(finalResult);
        }
    } catch (error) {
          next (error)
    }
  });

  module.exports = router;
const router = require('express').Router();
const fetch = require ('node-fetch');
const sequelize = require('sequelize');
const Op = sequelize.Op;
const { Breed, Temper } = require('../db.js');

// --------------- PARA " get /dogs " ----------
router.get('/', async function(req, res, next){

try {
    //const allBreedsAPI = await fetch ('https://api.thedogapi.com/v1/breeds');
    //const dataBreedsAPI = await allBreedsAPI.json(); 

    const allBreedsDB = await Breed.findAll({ include: Temper });
    const allBreedsAPI = await fetch ('https://api.thedogapi.com/v1/breeds').then(result => result.json());
    
    let filtBreedsDB =[], filtBreedsAPI = [];
            
    allBreedsAPI.forEach(breed => {
                    let {id, name, weight, temperament, image} = breed;
                    filtBreedsAPI.push({id, name, weight: weight.metric, temperament, imageUrl:image.url});
    });

    allBreedsDB.forEach(breed => {
                    let {id, name, weight, tempers} = breed;
                    filtBreedsDB.push({id, name, weight, temperament: tempers[0].name});
    });

    let finalResult = [...filtBreedsAPI, ...filtBreedsDB].sort((a,b) => {if (a.name < b.name) return -1});

    res.json(finalResult);
  } catch (error) {
    next (error)
  }
});

module.exports = router;
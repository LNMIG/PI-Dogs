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
                    let {name, weight, temperament, image} = breed;
                    filtBreedsAPI.push({name, weight: weight.metric, temperament, imageUrl:image.url});
    });
    
    allBreedsDB.forEach(breed => {
                    let {name, weight, temperament} = breed;
                    filtBreedsDB.push({name, weight: weight.metric, temperament, imageUrl});
    });
    
    let finalResult = [...filtBreedsAPI, ...filtBreedsDB].sort((a,b) => {return a.name - b.name});

    res.json(finalResult);
  } catch (error) {
    next (error)
  }
});

module.exports = router;
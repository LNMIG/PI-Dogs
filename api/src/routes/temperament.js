const router = require('express').Router();
const fetch = require ('node-fetch');
const sequelize = require('sequelize');
const Op = sequelize.Op;
const { Breed, Temper } = require('../db.js');

router.get('/', async function(_req, res, next){
    try {
      const allTemperDB = await Temper.findAll();

      if (allTemperDB.length === 0 ) {
        const allBreedsAPI = await fetch ('https://api.thedogapi.com/v1/breeds').then(result => result.json());

        let ordTempAPI = [], fiTempAPI = [], setTempAPI = [];
        allBreedsAPI.forEach(breed => {
          let {temperament} = breed;
          fiTempAPI.push(temperament);
        });

        //                todo a un string | minúsculas | a arreglo | saca esapcios extremos de c/temper | ordena array
        ordTempAPI = fiTempAPI.toString(',').toLowerCase().split(',').map(temper => {return temper.trim()}).sort().filter(temper => temper !=='');
        // creo objeto Temperaments no repetidos
        //console.log(ordTempAPI)
        setTempAPI = new Set(ordTempAPI);
        // genero un Array usando el objeto y paso a mayúsculas la primer letra de cada elemento
        ordTempAPI = Array.from(setTempAPI).map(t => {return t[0].toUpperCase() + t.slice(1)});

        for (let i=0; i<ordTempAPI.length; i++) {
          let loading = await Temper.create({ name: ordTempAPI[i] });
        }

        const allTemperDB = await Temper.findAll();
        res.json(allTemperDB);
    } else {
        res.json(allTemperDB);
    }

    } catch (error) {
      next (error)
    }
  });

module.exports = router;
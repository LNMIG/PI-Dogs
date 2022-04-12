const router = require('express').Router();
const fetch = require ('node-fetch');
const sequelize = require('sequelize');
const Op = sequelize.Op;
const { Breed, Temper } = require('../db.js');

// --------------- PARA  get /dogs?name="..." ----------
        /* router.get('/dogs?name=LINKdb', async function(req, res, next){
        try {
            const { LINKdb } = req.query;
            const {count, rows} = await Breed.findAndCountAll({
                where: {
                    name: {
                        [Op.substring]: LINKdb,
                    }
                },
                //offset: 10,
                limit: 8,
            });
            if (count && count > 0) return res.json(rows);
            return res.status().send('Lo sentimos, no existe información de la raza silicitada');
        } catch (error) {
                next (error)
        }
        }); */

router.get('/', async function(req, res, next){
    try {
        const { name } = req.query;
        console.log(name)
        const oneBreedDB = await Breed.findAll({
            where: { name: { [Op.substring]: name, } },
            include: Temper  
        });
        const oneBreedAPI = await fetch (`https://api.thedogapi.com/v1/breeds/search?q=${name}`).then(result => result.json());

        let filtBreedDB =[], filtBreedAPI = [];

        oneBreedAPI.forEach(breed => {
            let {name, weight, temperament, reference_image_id} = breed;
            filtBreedAPI.push({name, weight: weight.metric, temperament, imageId: reference_image_id});
        });
        oneBreedDB.forEach(breed => {
            let {name, weight, temperament} = breed;
            filtBreedDB.push({name, weight: weight.metric, temperament, imageId});
        });

        let finalResult = [...filtBreedAPI, ...filtBreedDB].sort((a,b) => {return a.name - b.name});

        finalResult.length > 0 ? res.json(finalResult) : res.status(404).send('Lo sentimos, no existe información de la raza solicitada');
    } catch (error) {
          next (error)
    }
  });

  module.exports = router;
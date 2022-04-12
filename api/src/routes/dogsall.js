const router = require('express').Router();
const fetch = require ('node-fetch');
const sequelize = require('sequelize');
const Op = sequelize.Op;
const { Breed, Temper } = require('../db.js');



router.get('/', async function(req, res, next){

    const {name} = req.query;

    try {

        if (!name) { 
            // --------------- PARA " get /dogs " ----------
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

        } else {

            // --------------- PARA  get /dogs?name="..." ----------
            const oneBreedDB = await Breed.findAll({
                where: { name: { [Op.substring]: name, } },
                include: Temper  
            });
            const oneBreedAPI = await fetch (`https://api.thedogapi.com/v1/breeds/search?q=${name}`).then(result => result.json());

            let filtBreedDB =[], filtBreedAPI = [];

            oneBreedAPI.forEach(breed => {
                let {name, weight, height, life_span, temperament, reference_image_id} = breed;
                filtBreedAPI.push({name, weight: weight.metric, height: height.metric, life_span, temperament, imageId: reference_image_id});
            });
            oneBreedDB.forEach(breed => {
                let {name, weight, height, life_span} = breed;
                filtBreedDB.push({name, weight, height, life_span});
            });

            let finalResult = [...filtBreedAPI, ...filtBreedDB].sort((a,b) => {if (a.name < b.name) {return  -1}});

            finalResult.length > 0 ? res.json(finalResult) : res.status(404).send('Lo sentimos, no existe información de la raza solicitada');
        } 
    } catch (error) {
        next (error)
    }
});

// --------------- PARA  get /dogs/{idRaza} ----------
router.get('/:idBreed', async function(req, res, next){
    try {
        const { idBreed } = req.params;
        console.log(idBreed)
        const idBreedDB = await Breed.findAll({
            where: { id: idBreed },
            include: Temper  
        });
        console.log(idBreedDB)
        const allBreedsAPI = await fetch (`https://api.thedogapi.com/v1/breeds`).then(result => result.json());
        const idBreedAPI = allBreedsAPI.filter(breed => breed.id === parseInt(idBreed));
        console.log(idBreedAPI)
        let finalResult= [];
        if (idBreedDB.length === 0 && idBreedAPI.length === 0) return res.status(404).send('Lo sentimos, no existe información de la raza solicitada'); 
        
        if (idBreedDB.length > 0) { 
            let {name, weight, height, tempers, life_span} = idBreedDB[0];
            finalResult.push({name, weight, height, life_span, temperament: tempers[0].name});
            return res.json(finalResult);
        } else {
            let {name, weight, height, temperament, life_span, image} = idBreedAPI[0];
            finalResult.push({name, weight: weight.metric, height: height.metric, life_span, temperament, image:image.url});
            return res.json(finalResult);
        }
    } catch (error) {
          next (error)
    }
  });

module.exports = router;
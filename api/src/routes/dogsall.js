require('dotenv').config();
const router = require('express').Router();
const fetch = require ('node-fetch');
const sequelize = require('sequelize');
const Op = sequelize.Op;
const { Breed, Temper } = require('../db.js');
const { API_KEY } = process.env;

function filterTempers (tempers) {
    let auxTemperaments=[], finalTemperaments;
    if (!tempers.length) finalTemperaments = "";
    for (let i=0; i<tempers.length; i++) {auxTemperaments.push(tempers[i].dataValues.name)}
    finalTemperaments = auxTemperaments.join(', ');
    return finalTemperaments;
}


router.get('/', async function(req, res, next){

    const {name} = req.query;

    try {
        if (!name) { 
            // --------------- PARA " get /dogs " ----------
            //const allBreedsAPI = await fetch ('https://api.thedogapi.com/v1/breeds');
            //const dataBreedsAPI = await allBreedsAPI.json(); 
           
            const allBreedsDB = await Breed.findAll({ include: Temper });
            const allBreedsAPI = await fetch (`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`).then(result => result.json());

            let filtBreedsDB =[], filtBreedsAPI = [], finalResult=[];
            allBreedsAPI.forEach(breed => {
                    let {id, name, weight, temperament, image} = breed;
                    filtBreedsAPI.push({id, name, weight: weight.metric, temperament, image:image.url});
            });
            allBreedsDB.forEach(breed => {
                    let {id, name, weight, tempers, image} = breed;
                    let temperaments = filterTempers(tempers);
                    filtBreedsDB.push({id, name, weight, temperament: temperaments, image});
            });

            finalResult = [...filtBreedsAPI, ...filtBreedsDB];
            finalResult.length > 0 ? res.status(200).json(finalResult) : res.status(404).json('Sorry, there is no breed');

        } else {

            // --------------- PARA  get /dogs?name="..." ----------
            const oneBreedDB = await Breed.findAll({
                where: { 
                        name: { 
                            [Op.or]: {
                                [Op.iLike]: name+'%',
                                [Op.substring]: name,
                            } 
                        }},
                include: Temper  
            });
            const oneBreedAPI = await fetch (`https://api.thedogapi.com/v1/breeds/search?q=${name}&api_key=${API_KEY}`).then(result => result.json());

            let filtBreedDB =[], filtBreedAPI = [];

            oneBreedAPI.forEach(breed => {
                let {id, name, weight, temperament, reference_image_id} = breed;
                filtBreedAPI.push({id, name, weight: weight.metric, temperament, image: `https://cdn2.thedogapi.com/images/${reference_image_id}.jpg`});
            });
            oneBreedDB.forEach(breed => {
                let {id, name, weight, tempers, image} = breed;
                let temperaments = filterTempers(tempers);
                filtBreedDB.push({id, name, weight, temperament: temperaments, image});
            });

            let finalResult = [...filtBreedAPI, ...filtBreedDB]; //.sort((a,b) => {if (a.name < b.name) {return  -1}});

            finalResult.length > 0 ? res.status(200).json(finalResult) : res.status(404).json('Sorry, there is no breed matching your search');
        } 
    } catch (error) {
        next (error)
    }
});

// --------------- PARA  get /dogs/{idRaza} ----------
router.get('/:idBreed', async function(req, res, next){

    try {
        const { idBreed } = req.params;
        const idBreedDB = await Breed.findAll({
            where: { id: idBreed },
            include: Temper  
        });
        
        const allBreedsAPI = await fetch (`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`).then(result => result.json());
        const idBreedAPI = allBreedsAPI.filter(breed => breed.id === parseInt(idBreed));
        
        let finalResult= [];
        if (idBreedDB.length === 0 && idBreedAPI.length === 0) return res.status(404).send('Sorry, there is no breed matching your search'); 
        
        if (idBreedDB.length > 0) { 
            let {name, weight, height, tempers, life_span, image} = idBreedDB[0];
            let temperaments = filterTempers(tempers);
            finalResult.push({name, weight, height, life_span, temperament: temperaments, image});
            return res.status(200).json(...finalResult);
        } else {
            let {name, weight, height, temperament, life_span, image} = idBreedAPI[0];
            finalResult.push({name, weight: weight.metric, height: height.metric, life_span, temperament, image:image.url});
            return res.status(200).json(...finalResult);
        }
    } catch (error) {
          next (error)
    }
});

module.exports = router;
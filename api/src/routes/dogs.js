// [ ] Input de búsqueda para encontrar razas de perros por nombre
// [ ] Área donde se verá el listado de razas de perros. Deberá mostrar su:
//      Imagen
//      Nombre
//      Temperamento
//      Peso
// [ ] Botones/Opciones para filtrar por:
//      Temperamento
//      Raza existente (es decir las que vienen de la API) o agregada por nosotros
//      (creadas mediante el form)
// [ ] Botones/Opciones para ordenar tanto ascendentemente como descendentemente
// las razas de perro por:
//      Orden alfabético
//      Peso
// [ ] Paginado para ir buscando y mostrando las siguientes razas, mostrando 8 razas
// por página.

const router = require('express').Router();
const fetch = require ('node-fetch');
const sequelize = require('sequelize');
const Op = sequelize.Op;
const { Breed, Temper } = require('../db.js');

// ------ LAS TENGO QUE UNIR Y GENERAR UNA SOLA SALIDA ------
// VA ESTE CODIGO " router.get('/', async function(_req, res, next){ "
router.get('/dogs', async function(_req, res, next){
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

// ------ LAS TENGO QUE UNIR Y GENERAR UNA SOLA SALIDA ------
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

// VA ESTE CODIGO router.get('/', async function(req, res, next){
router.get('/', async function(req, res, next){
    try {
        const { name } = req.query;

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
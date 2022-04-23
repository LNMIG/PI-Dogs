/* eslint-disable import/no-extraneous-dependencies */
const expect = require('chai').expect;
const session = require('supertest-session');
const app = require('../../src/app.js');
// const { Dog, conn } = require('../../src/db.js');
const { Breed, Temper, conn } = require('../../src/db.js');

const agent = session(app);
const dog = {
  name: 'Camello',
  height: '162 - 190',
  weight: '523 - 765',
};

describe('Dogs PI routes testing', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));

  beforeEach(() => Breed.sync({ force: true })
    .then(() => Breed.create(dog)));

  describe('GET /dogs/:idBreed', () => {
    it('should respond with 200', () => {
      return agent.get('/dogs/2').expect(200);
    });
    it('should responde with 404', () => {
      return agent.get('/dogs/200000').expect(404);
    });
    it('should responde with string "Sorry, there is no..."', () => {
      return agent.get('/dogs/200000').expect('Sorry, there is no breed matching your search', true);
    });
  });
  describe('POST /dog', () => {
    it('should respond with 201 after adding a new breed', () => {
      return agent.post('/dog')
      .send({
        name: 'Chihuahua',
        height: '20 - 35',
        weight: '15 - 32',
        life_span: 'none',
        image: 'none',
        temperaments: 'Friendly'
      }).expect(201);
    });
    it('should respond with json file with dog data', () => {
      return agent.post('/dog')
      .send({
        name: 'Chihuahua',
        height: '20 - 35',
        weight: '15 - 32',
        life_span: 'none',
        image: 'none',
        temperaments: 'Friendly'
      })
      .then(() => {
        return Breed.findOne({
          where: { name: 'Chihuahua'}
        });
      })
      .then(dog => {
        expect(dog).to.exist});
    });
    
  });
});

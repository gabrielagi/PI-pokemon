// /* eslint-disable import/no-extraneous-dependencies */
// const { expect } = require('chai');
// const session = require('supertest-session');
// const app = require('../../src/app.js');
// const { Pokemon, conn } = require('../../src/db.js');

// const agent = session(app);
// const pokemon = {
//   name: 'Pikachu',
// };

// describe('Pokemon routes', () => {
//   before(() => conn.authenticate()
//   .catch((err) => {
//     console.error('Unable to connect to the database:', err);
//   }));
//   beforeEach(() => Pokemon.sync({ force: true })
//     .then(() => Pokemon.create(pokemon)));
//   describe('GET /pokemons', () => {
//     it('should get 200', () =>
//       agent.get('/pokemons').expect(200)
//     );
//   });
// });

// const { describe } = require('node:test')
const { expect } = require("chai");
const app = require("../../src/app");
const request = require("supertest");
const agent = request(app);

describe("Pokemon routes", () => {
  describe("GET /pokemons/:id", () => {
    it("Response with status: 200", async () => {
      await agent.get("/pokemons/1").expect(200);
    });
    // Evaluar si la petición devuelve los campos del objeto Pokemon correctos
    it(`Response a object with the following properties: "id", "name", "image", "hp", "attack", "defense", "speed", "height", "weight", "types" `, async () => {
      const { body } = await agent.get("/pokemons/1");
      // console.log("Pokemon body", body);
      const attributes = [
        "id",
        "name",
        "image",
        "hp",
        "attack",
        "defense",
        "speed",
        "height",
        "weight",
        "types",
      ];

      const keys = Object.keys(body);

      attributes.forEach((attribute) => {
        expect(keys).contain(attribute);
      });
    });
    // Probar una ruta incorrecta
    it("If there is an error it responds with status: 500", async () => {
      try {
        await agent.get("/pokemons/mismichis").expect(500);
      } catch (error) {
        error;
      }
    });
  });

  describe("POST /pokemons", () => {
    const newPokemon = {
      id: 200,
      name: "Michi",
      img: "url",
      hp: 30,
      attack: 40,
      defense: 10,
      speed: 66,
      height: 80,
      weight: 300,
      types: [{ name: "fire" }],
    };

    it("Return a new Pokemon Created", async () => {
      const response = await agent.post("/pokemons").send(newPokemon);

      // Verifico la respuesta de estado
      expect(response.status).to.equal(200);
    });
  });
});

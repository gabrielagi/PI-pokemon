// const { Pokemon, conn } = require('../../src/db.js');
// const { expect } = require('chai');

// describe('Pokemon model', () => {
//   before(() => conn.authenticate()
//     .catch((err) => {
//       console.error('Unable to connect to the database:', err);
//     }));
//   describe('Validators', () => {
//     beforeEach(() => Pokemon.sync({ force: true }));
//     describe('name', () => {
//       it('should throw an error if name is null', (done) => {
//         Pokemon.create({})
//           .then(() => done(new Error('It requires a valid name')))
//           .catch(() => done());
//       });
//       it('should work when its a valid name', () => {
//         Pokemon.create({ name: 'Pikachu' });
//       });
//     });
//   });
// });

const { expect } = require("chai");
const db = require("../../src/db");

describe("Pokemon Model", () => {
  // Se sincroniza el modelo con la base de datos
  beforeAll(async () => {
    await db.conn.sync({ force: true });
  });

  it("should create a new Pokemon", async () => {
    // Creo un nuevo Pokemon en la base de datos
    const pokemon = await db.Pokemon.create({
      name: "Pikachu",
      img: "pokemonIMG",
      hp: 100,
      attack: 50,
      defense: 40,
    });

    // Verifico que el Pokemon se haya creado correctamente
    expect(pokemon.id).to.exist;
    expect(pokemon.name).to.equal("Pikachu");
    expect(pokemon.img).to.equal("pokemonIMG");
    expect(pokemon.hp).to.equal(100);
    expect(pokemon.attack).to.equal(50);
    expect(pokemon.defense).to.equal(40);
  });

  it("should not allow duplicate names", async () => {
    // Intento crear un Pokemon con el mismo nombre que uno existente
    try {
      await db.Pokemon.create({
        name: "Pikachu",
        img: "pokemonURL",
        hp: 90,
        attack: 60,
        defense: 30,
      });
      // Si el Pokemon se crea con éxito la prueba falla
      fail("Creating duplicate Pokemon should throw an error");
    } catch (error) {
      // Controlo que se haya lanzado un error de validación
      expect(error.name).to.equal("SequelizeUniqueConstraintError");
    }
  });

  it("should create a new Type", async () => {
    // Creo un nuevo Type en la base de datos
    const type = await db.Type.create({
      name: "darkFire",
    });

    // Verifica que el Type se haya creado correctamente
    expect(type.id).to.exist;
    expect(type.name).to.equal("darkFire");
  });

  it("should not allow duplicate type names", async () => {
    // Intenta crear un Type con el mismo nombre que uno existente
    try {
      await db.Type.create({
        name: "darkFire",
      });
      // Si el Type se crea con éxito, la prueba debería fallar
      fail("Creating duplicate Type should throw an error");
    } catch (error) {
      // Verifica que se haya lanzado un error de validación
      expect(error.name).to.equal("SequelizeUniqueConstraintError");
    }
  });

  // Esta función debería cierra la conexión con la base de datos
  afterAll(async () => {
    await db.conn.close();
  });
});

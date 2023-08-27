const { Router } = require("express");
const { getAllPokemonsHandler } = require("../handlers/pokemonHandlers");

const router = require("express").Router();

router.get("/", getAllPokemonsHandler);

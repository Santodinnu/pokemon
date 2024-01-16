// Modules
const express = require("express");
// load router
const router = express.Router();
// load controller
const pokemonController = require('../controller/pokemonController.js')

//index
router.get('/', pokemonController.pokemonIndex)


// show
router.get('/:index', pokemonController.pokemonShow)

module.exports = router


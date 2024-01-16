const pokemon = require("../models/pokemon");

//INDEX
const pokemonIndex = (req, res) => {
  // res.send(pokemon) // test initial response
  res.render("Index", { pokemon: pokemon });
};

// SHOW 
const pokemonShow = (req, res) => {
  //response = renderThis(views/'Show', props{ pokeProp= pokemonArray[i of paramFromRoutes]})
  res.render("Show", { pokemon: pokemon[req.params.index] });
};


module.exports = {
  pokemonIndex,
  pokemonShow,
};

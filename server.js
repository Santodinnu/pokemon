// Modules
const express = require("express");
const jsxEngine = require("jsx-view-engine");

// Database Models
const pokemon = require("./models/pokemon"); 
// Routes
const pokemonRoutes = require("./routes/pokemonRoutes");

// Express app
const app = express();
const PORT = 3000;


app.set("view engine", "jsx");
app.engine("jsx", jsxEngine());

// Mount middleware (app.use)
app.use("/pokemon", pokemonRoutes); 


// ==ROOT==
app.get("/", (req, res) => {
  res.send("Welcome to the Pokemon App!");
});

app.listen(PORT, () => {
  console.log(`listening to port: ` + PORT);
});
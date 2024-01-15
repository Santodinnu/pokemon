const express = require('express')
//const methodOverride = require('method-override')

const app = express()

// const fruits = require('./models/fruits')

const PORT = 3000

// load our engine
const jsxEngine = require('jsx-view-engine')

// bring in the router
// const fruitRoutes = require('./routes/fruitRoutes')
// const vegetableRoutes = require('./routes/vegetableRoutes')

// format our POST request data 
// app.use(express.urlencoded({ extended: true }));
// app.use(methodOverride('_method'))
// app.use('/fruits', fruitRoutes)
// app.use('/vegetables', vegetableRoutes)

// setup our engine
// app.set('view engine', 'jsx');
// app.engine('jsx', jsxEngine());

// "root" route
app.get('/', (req, res) => {
    res.send('Welcome to the Pokemon App!');
})

app.listen(PORT, () => {
    console.log('Listening on port: ' + PORT)
})
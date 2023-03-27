const express = require('express');
require('dotenv').config();
const ejs = require('ejs');
const app = express();
const mainRoutes = require('./routes/mainRoutes');

app.use('/' , mainRoutes)
app.set( 'view engine' , 'ejs');

const PORT = process.env.PORT || 3000;

app.listen(PORT , (req,res) =>
{
    console.log("Corriendo en el puerto " + PORT);
})

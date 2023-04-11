const express = require('express');
require('dotenv').config();

const ejs = require('ejs');
const mainRoutes = require('./routes/mainRoutes');

//Para http
const morgan = require('morgan');
const bodyParser = require('body-parser');


const app = express();

//Usamos los middlewares de express
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('combined'));

app.set( 'view engine' , 'ejs');
app.set( 'views' , __dirname + '/views');
app.use('/' , mainRoutes)

app.use(express.static(__dirname + '/public'));


const PORT = process.env.PORT || 3000;

app.listen(PORT , (req,res) =>
{
    console.log("Corriendo en el puerto " + PORT);
});

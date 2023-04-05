const controlador = 
{

    

    getHome : (req , res) =>
    {
        res.render('home');
    }
    ,
    getStore : (req , res) =>
    {
        res.render('store');

        const id = req.params.id;

        const {nameProduct , description , price} = req.body; 
    }
    , getRegister : (req , res) =>
    {
        res.render('register');
        console.log(usuariosJSON);
    },
    postRegister : (req , res) =>
    {

        const fs = require('fs');

        const usersJSON = JSON.parse(fs.readFileSync('./data/usuarios.json'));
  const newUser = req.body;
  usersJSON.push(newUser);
  fs.writeFileSync('./data/usuarios.json', JSON.stringify(usersJSON));
  res.send("Usuario guardado correctamente!");

        console.log(req.body);
      
        res.redirect('/');


    }
    , getLogin : (req , res) =>
    {
        res.render('login');
    }
    , getCart : (req , res) =>
    {
        res.render('cart');
    }
    


}

module.exports = controlador;
const controller = 
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
        res.render('register'  );
        
    },


    postRegister : (req , res) =>
    {

        console.log(req.body);

        const fs = require('fs');

        const usersJSON = [];
  const newUser = {
    name: req.body.name,
    lastname: req.body.lastname,
    email: req.body.email,
    password: req.body.password

  };

  usersJSON.push(newUser);
  const data = JSON.stringify(req.body);

  fs.writeFileSync('', JSON.stringify(usersJSON));

  res.send("User saved succesfully!");

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

module.exports = controller;
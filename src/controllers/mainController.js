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
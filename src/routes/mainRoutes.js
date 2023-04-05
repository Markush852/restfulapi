const express = require('express');

const router = express.Router();

const mainController = require('../controllers/mainController')

router.get('/' , mainController.getHome);

router.get('/register' , mainController.getRegister);
router.post('/register' , mainController.postRegister);

router.get('/store' , mainController.getStore);

router.get('/login' , mainController.getLogin);

router.get('/cart' , mainController.getCart);

router.get('/' , mainController.getHome);

module.exports = router;
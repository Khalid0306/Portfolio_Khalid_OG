const express = require ('express');
const router = express.Router();
const portfolioController = require('../controllers/portfolioController');

router.get('/portfolio', portfolioController.portfolio);


module.exports = router;
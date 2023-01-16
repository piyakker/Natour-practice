const express = require('express');
const router = express.Router();

const toursController = require('../../controllers/toursController');

router.get('/top-5-cheap', toursController.aliasTopTours, toursController.getAllTours);

router.get('/', toursController.getAllTours);
router.post('/', toursController.createTour);
router.get('/:id', toursController.getTour);
router.patch('/:id', toursController.updateTour);
router.delete('/:id', toursController.deleteTour);

module.exports = router;
const express = require('express');
const router = express.Router();

const toursController = require('../../controllers/toursController');
const authController = require('../../controllers/authController');

router.get('/top-5-cheap', toursController.aliasTopTours, toursController.getAllTours);
router.get('/tour-stats', toursController.getTourStats);
router.get('/monthly-plan/:year', toursController.getMonthlyPlan);

router.get('/', authController.protect, toursController.getAllTours);
router.post('/', toursController.createTour);
router.get('/:id', toursController.getTour);
router.patch('/:id', toursController.updateTour);
router.delete(
  '/:id',
  authController.protect,
  authController.restrictTo('admin', 'lead-guide'),
  toursController.deleteTour
  );

module.exports = router;
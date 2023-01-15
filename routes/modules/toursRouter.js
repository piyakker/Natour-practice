const fs = require('fs');
const express = require('express');
const router = express.Router();

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/../../data/tours-simple.json`)
  );

router.get('/', (req, res) => {
  res.status(200).json({
    status: 'success',
    results: tours.length,
    data: {
      tours
    }
  });
});

router.post('/', (req, res) => {
  const newId = tours[tours.length - 1].id + 1;
  const newTour = Object.assign({id: newId}, req.body);

  tours.push(newId, newTour);

  fs.writeFile(
    `${__dirname}/../../data/tours-simple.json`,
    JSON.stringify(tours),
    err => {
      res.status(201).json({
        status: 'success',
        data: {
          tour: newTour
        }
      });
  });
});

router.get('/:id', (req, res) => {
  const id = req.params.id * 1;
  const tour = tours.find(el => el.id === id);

  if (!tour) {
    return res.status(404).json({
      status: 'fail',
      message: 'Invalid id'
    });
  };

  res.status(200).json({
    status: 'success',
    data: {
      tour
    }
  });
});

router.patch('/:id', (req, res) => {
  if (req.params.id * 1 > tours.length) {
    return res.status(404).json({
      status: 'fail',
      message: 'Invalid id'
    });
  };

  res.status(200).json({
    status: 'success',
    data: {
      tour: 'updated tour'
    }
  });
});

router.delete('/:id', (req, res) => {
  if (req.params.id * 1 > tours.length) {
    return res.status(404).json({
      status: 'fail',
      message: 'Invalid id'
    });
  };

  res.status(204).json({
    status: 'success',
    data: null
  });
});

module.exports = router;
const Tour = require('./../models/tourModel');

// const checkID = (req, res, next, val) => {
//   if (val * 1 > tours.length - 1) {
//     return res.status(404).json({
//       status: 'fail',
//       message: 'Invalid ID',
//     });
//   }
//   next();
// };

const getAllTours = (req, res) => {
  res.status(200).json({
    status: 'success',
    requestedAt: req.requstTime,
    language: req.language,
    // results: tours.length,
    // data: {
    //   tours,
    // },
  });
};

const getTour = (req, res) => {
  const tourId = req.params.id * 1;
  // const tour = tours.find((tour) => tour.id === tourId);

  res.status(200).json({
    status: 'success',
    // data: {
    //   tour,
    // },
  });
};

const createTour = (req, res) => {
  res.status(201).json({
    status: 'success',
    // data: {
    //   tour: newTour,
    // },
  });
};

const updateTour = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {
      tour: '<Updated tour here...>',
    },
  });
};

const deleteTour = (req, res) => {
  res.status(204).json({
    status: 'success',
    data: null,
  });
};

exports.getAllTours = getAllTours;
exports.getTour = getTour;
exports.createTour = createTour;
exports.updateTour = updateTour;
exports.deleteTour = deleteTour;

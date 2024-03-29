const express = require('express');
// logging middleware
const morgan = require('morgan');
const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();

// 1) MIDDLEWARES
app.use(morgan('dev'));
app.use(express.json());
app.use(express.static(`${__dirname}/public`));
app.use((req, res, next) => {
  req.requstTime = new Date().toISOString();
  req.language = 'fa';
  next();
});

// app.get('/api/v1/tours', getAllTours);
// app.post('/api/v1/tours', createTour);
// app.get('/api/v1/tours/:id', getTour);
// app.patch('/api/v1/tours/:id', updateTour);
// app.delete('/api/v1/tours/:id', deleteTour);

// 2) ROUTES
// * tourRouter middleware
app.use('/api/v1/tours', tourRouter);
// * userRouter middleware
app.use('/api/v1/users', userRouter);

module.exports = app;

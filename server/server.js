const express = require('express');
const app = express();
const path = require('path');
const divers = require('./controllers/diverController.js');
const sessionController = require('./controllers/sessionController.js');
const cookieController = require('./controllers/cookieController.js');

const PORT = 3000;

app.use(express.json());

app.use('/', express.static('dist'));

// Diver Requests
app.post(
  '/add_diver',
  divers.addDiver,
  cookieController.setSSIDCookie,
  (req, res) => res.status(200).send(res.locals.diver)
);

app.get(
  '/get_diver',
  divers.getDiver,
  cookieController.setSSIDCookie,
  (req, res) => {
    console.log(res.locals);
    return res.status(200).send(res.locals.diver);
  }
);

// Instructor Requests
app.get('/get_divers', divers.getDivers, (req, res) =>
  res.status(200).send(res.locals.divers)
);

app.post('/add_dive', divers.addDive, (req, res) =>
  res.status(200).send(res.locals.diver)
);

// Error Handling
app.use((req, res) => res.status(404).send('Page not found.'));

app.use((error, req, res, next) => {
  console.log(error);
  res.status(error.status || 400);
  res.json({
    error: {
      log: error.log || 'Express error handler caught unknown middleware error',
      status: error.status || 400,
      message: error.message || 'An error occurred',
    },
  });
});

app.listen(PORT, () => {
  console.log('SERVER IS RUNNING! WOOOO!');
});

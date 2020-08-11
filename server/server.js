const express = require('express');
const app = express();
const path = require('path');
const divers = require('./controllers/diverController.js');

const PORT = 3000;

app.use(express.json());

app.use('/', express.static('dist'));

// Diver Requests
app.post('/add_diver', divers.addDiver, (req, res) =>
  res.status(200).send(res.locals.diver)
);

app.get('/get_diver', divers.getDiver, (req, res) =>
  res.status(200).send(res.locals.diver)
);

// Instructor Requests
app.get('/get_divers', divers.getDivers, (req, res) =>
  res.status(200).send(res.locals.divers)
);

app.post('/add_dive', divers.addDive, divers.getDiver, (req, res) =>
  res.status(200).send(res.locals.diver)
);

// Error Handling
app.use((req, res) => res.status(404).send('Page not found.'));

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send(err);
});

app.listen(PORT, () => {
  console.log('SERVER IS RUNNING! WOOOO!');
});

const mongoose = require('mongoose');

const MONGO_URI =
  'mongodb+srv://alonso:atlas66@scubalogbook.07vyb.mongodb.net/ScubaLogBook?retryWrites=true&w=majority';
mongoose
  .connect(MONGO_URI, {
    // options for the connect method to parse the URI
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // sets the name of the DB that our collections are part of
    dbName: 'scubalogbook',
  })
  .then(() => console.log('Connected to Mongo DB.'))
  .catch((err) => console.log(err));

// sets a schema for the 'species' collection
const diverSchema = new mongoose.Schema({
  diverNumber: { type: String, unique: true },
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  dives: [],
});

const Divers = mongoose.model('diver', diverSchema);

// creats a model for the 'species' collection that will be part of the export
module.exports = { Divers };

const mongoose = require('mongoose');

const MONGO_URI =
  'mongodb+srv://alonso:hahaha66@cluster0.3grac.mongodb.net/<dbname>?retryWrites=true&w=majority';
// 'mongodb+srv://alonso:atlas66@scubalogbook.07vyb.mongodb.net/ScubaLogBook?retryWrites=true&w=majority';
mongoose
  .connect(MONGO_URI, {
    // options for the connect method to parse the URI
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // sets the name of the DB that our collections are part of
    dbName: 'scuba',
  })
  .then(() => console.log('Connected to Mongo DB.'))
  .catch((err) => console.log(err));

// sets a schema for the 'species' collection
const diverSchema = new mongoose.Schema({
  diverNumber: { type: String, unique: true },
  firstName: String,
  lastName: String,
  email: { type: String, unique: true },
  password: String,
  instructor: Boolean,
  dives: [],
});

const Divers = mongoose.model('diver', diverSchema);

// creats a model for the 'species' collection that will be part of the export
module.exports = { Divers };

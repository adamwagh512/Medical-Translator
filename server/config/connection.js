const { connect, connection } = require('mongoose');

connect('mongodb://localhost/MedicalTranslator', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
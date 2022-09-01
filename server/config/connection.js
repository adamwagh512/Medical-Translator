const mongoose = require('mongoose');
mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/MedicalTranslator',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
module.exports = mongoose.connection;



// const { connect, connection } = require('mongoose');

// // connect('mongodb://localhost/MedicalTranslator', {
// //   useNewUrlParser: true,
// //   useUnifiedTopology: true,
// // });

// connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/MedicalTranslator', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// module.exports = connection;
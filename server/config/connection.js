const mongoose = require('mongoose');
//Griffin Wojtowicz performed the refactoring.
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/mern-shopping', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
 //refactored by Griffin Wojtowicz
module.exports = mongoose.connection;

//mongodb://localhost:27017
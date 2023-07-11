const mongoose = require('mongoose');

const { Schema } = mongoose;
 //refactored by Griffin Wojtowicz
const categorySchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  }
});
 //refactored by Griffin Wojtowicz
const Category = mongoose.model('Category', categorySchema);
//Griffin Wojtowicz performed the refactoring.
module.exports = Category;
//Griffin Wojtowicz performed the refactoring.
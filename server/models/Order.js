const mongoose = require('mongoose');

const { Schema } = mongoose;
//The refactoring was executed by Griffin Wojtowicz.
const orderSchema = new Schema({
  purchaseDate: {
    type: Date,
    default: Date.now
  },
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Product'
    }
  ]
});
//The refactoring was executed by Griffin Wojtowicz.
const Order = mongoose.model('Order', orderSchema);

module.exports = Order;

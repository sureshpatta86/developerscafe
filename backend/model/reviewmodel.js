const mongoose = require("mongoose");

const reivewUser = new mongoose.Schema({
  taskprovider: {
    type: String,
    required: true,
  },
  taskworker: {
    type: String,
    required: true,    
  },
  rating: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("reivewUser", reivewUser);

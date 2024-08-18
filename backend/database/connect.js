const mongoose = require("mongoose");

const connectDB = (uri = "mongodb://localhost:27017/requestDB") => {
  return mongoose.connect(uri);
};

module.exports = connectDB;

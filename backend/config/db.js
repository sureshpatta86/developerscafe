const mongoose = require("mongoose");
//const config = require("config");
//const db = config.get("mongoDB_URI");
const db = "mongodb+srv://admin:admin@cluster0.za8w7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDb connected sucessfully...");
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};
module.exports = connectDB;

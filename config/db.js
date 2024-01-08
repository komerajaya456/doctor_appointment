const mongoose = require("mongoose");
const colors = require("colors");
const dbname="Doctor_apointmnt"
const url = `mongodb+srv://komerajaya7259:eihlGz2XfQOM3FoJ@secondcluster.vzmnsfg.mongodb.net/${dbname}?retryWrites=true&w=majority`

const connectDB = async () => {
  try {
    await mongoose.connect(url);
    console.log(`Mongodb connected ${mongoose.connection.host}`.bgGreen.white);
  } catch (error) {
    console.log(`Mongodb Server Issue ${error}`.bgRed.white);
  }
};

module.exports = connectDB;

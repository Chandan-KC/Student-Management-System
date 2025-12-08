// import mongoose from "mongoose";

// const mongoose = require("mongoose");
// export

const mongoose = require("mongoose");
async function ConnectDB() {
  try {
    await mongoose.connect(
      "mongodb+srv://1js19cv408_db_user:oEbNg2xOLzsYRgvs@studentmanagement.paskwop.mongodb.net/?appName=StudentManagement");
        console.log("Connected Mongodb");
  } catch (error) {
    console.log("Error Connecting to Mongodb", error);
  }
}
module.exports = ConnectDB;
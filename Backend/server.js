// const express = require("express");
// const app = express();
// const cors = require("cors");
// const mongoose =require("mongoose");
// // import mongoose from "mongoose";
// // const ConnectDB = require("./connection/db");

// // app.use(express(),json);
// // app.use(cors());

// const PORT = 3000;

// async function ConnectDB(){
//     try{
//         await mongoose.connect("mongodb+srv://1js19cv408_db_user:oEbNg2xOLzsYRgvs@studentmanagement.paskwop.mongodb.net/?appName=StudentManagement");
//         console.log("Connected MongoDB")
//     }
//     catch(error){
//         console.log("Error connecting to MongoDB ",error);
//     }
// }

// ConnectDB();

// app.listen(PORT, ()=>{
//     console.log("Your Application is running on PORT ",PORT);
// })

// #########################################

const express = require("express");
const app = express();
const cors = require("cors");
const ConnectDB = require("./connection/db");
app.use(express.json());
app.use(cors());

const PORT = 3000;

ConnectDB();

app.listen(PORT, () => {
  console.log("Application is running in PORT", PORT);
});



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
const mongoose = require("mongoose");
const Student = require("./model/Student")
app.use(express.json());
app.use(cors());

const PORT = 3000;

ConnectDB();

app.post("/api/student",async (req,res)=>{
    try{
        const newStudent = req.body;

        const student = new Student (newStudent);
        await student.save();

        res.status(200).json({
            success: true,
            messege: "Successfully Created Student",
            student: student,
        })
    }
    catch(error){
        console.log("Error creating student ",error);
    }
})

app.get("/api/students",async(req,res)=>{
    try{
        const students = await Student.find();

        res.status(200).json({
            success: true,
            message: "Successfully fetched all students",
            students: students,
        });
    }
    catch(error){
        console.log("Failed to display the students name ",error);

        res.status(400).json({
            success: false,
            message: "Failed to get students",
            error: error,
        });
    }
})

app.listen(PORT, ()=>{
    console.log("Your Application is running on PORT ",PORT);
})
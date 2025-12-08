const mongoose = require("mongoose");

// Create Schema
const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
},
{
    timestamps: true,
});

// Create Model
const Student = mongoose.model("Student", studentSchema);

module.exports = Student;

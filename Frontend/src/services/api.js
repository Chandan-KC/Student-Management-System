import axios from "axios";

const API = axios.create({
    baseURL : "http://localhost:3000/api",
})

export const getAllStudents = async()=>{
    try{
        const response = await API.get("/students");

        console.log("response ",response);
        console.log("response.data",response.data);
        console.log("response.data.students",response.data.students);
        
        const studentsArray = response.data.students;
        return studentsArray;
    }
    catch(error){
        console.log("Error getting Students",error)
    }

}

// Add new Student

export const addStudent = async ({name,age}) => {
    try{
        console.log("name", name)
        const response = await API.post("/student",{name,age});
        return response.data.messege;

    }

    catch(error){
        return "Error Creating Student",
        console.log("Error creating the student", error);
    }
}

        // for(let i=0;i<studentsArray.length;i++){
        //     console.log("Student Name",StudentObject[i].name);
        //     console.log("Student Age",StudentObject[i].age)
        // }


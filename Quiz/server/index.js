const express = require("express")
const mongoose = require("mongoose")
const cors =  require("cors")
const studentModel = require("./models/students")

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/Quizz");

app.post("/login",(req,res)=>{
    const {email,password} = req.body;
    studentModel.findOne({email:email})
    .then(students => {
        if(students) {
            if (students.password == password){
                res.json("success")
            }else{
                res.json("password is incorrect")
            }
        }else{
            res.json("user not found")
        }
    })
})

app.post("/register", (req, res) => {
    console.log("Received request body:", req.body);

    studentModel
        .create(req.body)
        .then((students) => {
            console.log("Student created:", students);
            res.json(students);
        })
        .catch((err) => {
            console.error("Error creating student:", err);
            res.status(500).json(err);
        });
});


app.listen(3001,()=>{
    console.log("server is running...")
})
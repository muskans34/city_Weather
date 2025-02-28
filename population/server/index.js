const express = require("express")
const mongoose = require("mongoose")
const cors =  require("cors")
const populationModel = require('./model/population')

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/population");

app.post("/login",(req,res)=>{
    const {email,password} = req.body;
    populationModel.findOne({email:email})
    .then(user => {
        if(user) {
            if (user.password == password){
                res.json("success")
            }else{
                res.json("password is incorrect")
            }
        }else{
            res.json("user not found")
        }
    })
})

app.post('/register',(req,res)=>{

    populationModel.create(req.body)
    .then(population => res.json(population))
    .catch(err => res.json(err))

})

app.listen(3001,()=>{
    console.log("server is running...")
})
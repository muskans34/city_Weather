const mongoose = require('mongoose')

const populationSchema = new mongoose.Schema({
    name:String,
    email : String,
    password:String                           
}) 

const populationModel = mongoose.model("population",populationSchema)
module.exports = populationModel
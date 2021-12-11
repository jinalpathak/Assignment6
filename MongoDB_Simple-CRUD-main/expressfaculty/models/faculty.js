const mongoose = require("mongoose");

//faculty Schema
const facultySchema=mongoose.Schema({
    username: String,
    password: String,
    name:String,
    age:Number,
});

const userModel = mongoose.model("faculty",facultySchema,"faculty");
module.exports=userModel;
require("dotenv").config();
const express = require("express");
const app = express();
app.use(express.json());
const port = 5000;
const mongoose = require("mongoose");

const facultyModel=require("./faculty");

mongoose
.connect(process.env.MONGOURL)
.then(()=>console.log("mongo db connected...."));

app.get("/",(req,res)=>res.send("Hello Fullstack!"));

app.get("/list",async(req,res)=>{
    const facultyList = await facultyModel.find();
    if(userList.length===0)
    {
        return res.json({data: "No data in fullstack"});
    }

    return res.json({data: facultyList});

});

//Register faculty
app.post("/registration",(req,res)=>{
    const { newFaculty } = req.body;
    facultyModel.create(newFaculty);
    return res.json({data: "Registered successfully..."}); 
});

//update faculty
app.put("/faculty/changepassword/:uname",async(req,res)=>{
    const uname = req.params.uname;
    const pass = req.body.password;

    const updatefaculty = await facultyModel.findOneAndUpdate(
        {username: uname},
        {password: pass},
        {new: true}

    );
        return res.json({data: "password updated successfully"});

});



//delete faculty
app.delete("/faculty/deletefaculty/:uname",async(req,res)=>{
    const deletefaculty=await facultyModel.findOneAndDelete({
        username: req.params.uname,
    });
    return res.json({data: "faculty deleted successfully"});
});


app.listen(port, () => console.log(`Server running on port 5000!`));

const express = require("express")
const bodyparser = require("body-parser")
const request = require("request")

const app = express();

app.use(bodyparser.urlencoded({extended:true}));

//images and css are static file so we have access them like this using express.static()
app.use(express.static("public"));

app.listen(process.env.PORT || 3000,function(){
    console.log("server is running on port 3000")
})

// app.get("/",function(req,res){
//     res.sendFile(__dirname+"/signup.html")

// })

// app.post("/",function(req,res){
    
//     // form name is use here
//     var fname =req.body.firstname
//     var lname =req.body.secondname
//     var email =req.body.emailid
//     console.log(req.body.firstname)
//     console.log(req.body.secondname)
//     console.log(req.body.emailid)
// })


//API KEY
// a69bf5d23817fdbd7517538d3a095ebb-us10


// audience/list id 
//82e9ee67ea
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


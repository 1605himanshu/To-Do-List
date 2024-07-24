const express = require('express');
const app = express();


app.get("/",function(req,res){
    res.sendFile(__dirname + "/public/api.html");
});

app.use(express.static("public"))

app.listen(9000,function(){
    console.log("Server Started")
})
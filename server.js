var express = require("express");
var bodyParser = require("body-parser");

var fs = require("fs");
server = express();

server.use(express.static("public"));
server.use(bodyParser.urlencoded());
server.use(bodyParser.json());

server.listen(8080, function(){
    console.log("Server is running at port 8080!")
})

var DB = require("nedb-promises");
var List = DB.create("list.db");

server.get("/list", function(req, res){
    List.find({}).then( (result)=>{
        res.send(result);
    } )
})
var express = require("express");
var bodyParser = require("body-parser");

var fs = require("fs");
server = express();

server.use(express.static("public"));
server.use(bodyParser.urlencoded());
server.use(bodyParser.json());

server.listen(9000, function(){
    console.log("Server is running at port 8080!")
})

var DB = require("nedb-promises");
var List = DB.create("list.db");

// List.insert([
//     { imgSrc: "../img/水1.png", name: "水鬼", area: "全台各地", years: "未知" },
//     { imgSrc: "../img/虎1.png", name: "虎姑婆", area: "客家聚落", years: "未知" },
//     { imgSrc: "../img/林1.png", name: "林投姐", area: "台南", years: "清代" },
//     { imgSrc: "../img/玉1.png", name: "水鬼", area: "全台各地", years: "未知" },
//     { imgSrc: "../img/紅1.png", name: "虎姑婆", area: "客家聚落", years: "未知" },
//     { imgSrc: "../img/魔1.png", name: "林投姐", area: "台南", years: "清代" }
// ])
server.get("/list", function(req, res){

    List.find({}).then( (result)=>{
        result.sort(function(a,b){return Math.random()-0.5});
        result.splice(3);
        res.send(result);
    } )
})
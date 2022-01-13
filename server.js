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
// var Contact = DB.create("contact.db")

// const formidable = require('formidable');

// List.insert([
//     { imgSrc: "../img/水1.png", name: "水鬼", area: "全台各地", years: "未知" },
//     { imgSrc: "../img/虎1.png", name: "虎姑婆", area: "客家聚落", years: "未知" },
//     { imgSrc: "../img/林1.png", name: "林投姐", area: "台南", years: "清代" },
//     { imgSrc: "../img/玉1.png", name: "玉山小飛俠", area: "玉山南峰", years: "1990年" },
//     { imgSrc: "../img/紅1.png", name: "紅衣小女孩", area: "台中市北屯區", years: "1998年" },
//     { imgSrc: "../img/魔1.png", name: "魔神仔", area: "全台中低海拔山區", years: "未知" }
// ])
server.get("/list", function(req, res){

    List.find({}).then( (result)=>{
        result.sort(function(a,b){return Math.random()-0.5});
        result.splice(3);
        res.send(result);
    } )
})
//
// server.get("/contact", function(req, res){
//     console.log(req.query);
    
//     res.redirect("/");
// })

// server.post("/contact_me", function(req, res){
//     console.log(req.body);
//     //check 
//     Contact.insert(req.body);
//     res.end()
// })

// server.post("/contact_file", function(req, res){
//      var form = formidable({maxFileSize:300*1024});
//      form.parse(req, function(err, fields, files){
//          if(err){
//              res.status(400).send({error: err.message})
//          }
//          else{
//             var uploadPath="contribute";
//              //move file to uploaded file path
//             fs.renameSync(files.file.filepath, uploadPath+"/"+files.file.originalFilename);
//              //write fields to db

//              res.end();
//          }
//      })
// })

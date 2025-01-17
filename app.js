var express = require("express");
var app = express();
var request = require('request');
app.set("view engine", "ejs")

app.get("/",function(req,res){
    res.render("search");
});

app.get("/results",function(req,res){
    var term = req.query.search;
    console.log(term)
    var url = "http://www.omdbapi.com/?i=tt3896198&apikey=bafcda0e&s="+ term;
    request(url,function(error,response,body){
        if(!error && response.statusCode == 200)
        {
            var data = JSON.parse(body)
            res.render("results",{data: data});
        }
    });
    // res.send("Hello, it works!");
});

app.listen(3000, process.env.IP , function(){
    console.log("Movie is presents");
})
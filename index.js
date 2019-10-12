var express=require("express");
var app =express();
app.use(express.static(__dirname+"/public"));
app.set("port",process.env.POST||2001)
app.get("/",function (req,res) {
    console.log("user in");
    res.type("text/html");
    res.send("<span style='color: green'>--welcome--</span>")
})

app.use(function (req,res) {
    res.type("text/html")
    res.status(404)
    res.send("<span style='color: red;'>404</span>")
})

app.use(function (req,res,err,next) {
    console.log(err,next)
    res.type("text/html")
    res.status(500)
    res.send("<span>500</span>")
})
app.listen(app.get("port"),function () {
    console.log("Express started on http://localhost:"+app.get("port")+";press ctrl +c to terminate")
})
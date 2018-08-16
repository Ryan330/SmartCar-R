//Init Express.js
const express = require("express");
const app = express();

const static = express.static;
const expressHbs = require("express-handlebars");

app.engine(".hbs", expressHbs({defaultLayout: "layout", extname: ".hbs"}));
app.set("view engine", ".hbs");

app.use(static("public"));


//Init Serial Connection
const sPort = require("serialport");
var robotPort = "/dev/ttyACM0";

var myPort = new sPort(robotPort, {
    baudRate: 9600
});


//Checks for Connection
//Connection Started
myPort.on("open", function robotStart() {console.log("Connection Started!")});




//Movement Controls
//Idle
app.get("/", function(request, response) {
    response.send(["Robot Idle!"]);
    myPort.flush();
    myPort.write("k");
});

//Forward
app.get("/up", function(request, response) {
    response.send(["Robot Forward!"]);
    myPort.flush();
    myPort.write("w");
});

//Reverse
app.get("/down", function(request, response) {
    response.send(["Robot Reverse!"]);
    myPort.flush();
    myPort.write("s");
});

//Left
app.get("/left", function(request, response) {
    response.send(["Robot Left!"]);
    myPort.flush();
    myPort.write("a");
});

//Right
app.get("/right", function(request, response) {
    response.send(["Robot Right!"]);
    myPort.flush();
    myPort.write("d");
});


//Toggle Lights
//On
app.get("/light-on", function(request, response) {
    response.send(["Robot Lights On!"]);
    myPort.flush();
    myPort.write("l");
});

//Off
app.get("/light-off", function(request, response) {
    response.send(["Robot Lights Off!"]);
    myPort.flush();
    myPort.write("l");
});



//Create Server
app.listen(5000, function() {
    console.log("Server: http://localhost:5000");
});
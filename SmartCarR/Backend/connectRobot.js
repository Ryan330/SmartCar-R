//Init Express.js
const express = require("express");
const app = express();

const static = express.static;
const expressHbs = require("express-handlebars");

app.engine(".hbs", expressHbs({defaultLayout: "layout", extname: ".hbs"}));
app.set("view engine", ".hbs");

app.use(static("public"));




//Init WebSocket
const WebSocket = require("ws");

const wss = new WebSocket.Server({
    port: 3001
})


//Init Serial Connection
const sPort = require("serialport");
var readLine = sPort.parsers.Readline;
var robotPort = "/dev/ttyACM0";

var myPort = new sPort(robotPort, {
    baudRate: 115200,
    parser: new readLine("\r\n")
});


//Checks for Connection
//Connection Started
myPort.on("open", function robotStart() {console.log("Connection Started!")});

//Connection Running
myPort.on("data", function robotData(data) {console.log(data.toString("utf8"))});




//Movement Controls
//Idle
app.get("/", function(request, response) {
    response.send(["Robot Idle!"]);
    myPort.write("k");
});

//Forward
app.get("/up", function(request, response) {
    response.send(["Robot Forward!"]);
    myPort.write("w");
});

//Reverse
app.get("/down", function(request, response) {
    response.send(["Robot Reverse!"]);
    myPort.write("s");
});

//Left
app.get("/left", function(request, response) {
    response.send(["Robot Left!"]);
    myPort.write("a");
});

//Right
app.get("/right", function(request, response) {
    response.send(["Robot Right!"]);
    myPort.write("d");
});


//Toggle Lights
//On
app.get("/light-on", function(request, response) {
    response.send(["Robot Lights On!"]);
    myPort.write("l");
});

//Off
app.get("/light-off", function(request, response) {
    response.send(["Robot Lights Off!"]);
    myPort.write("l");
});



//Create Server
app.listen(5000, function() {
    console.log("Server: http://localhost:5000");
});

wss.on("connection", function connection(ws) {
    console.log("Websocket is connected " + ws);
    ws.on("message", function command(data) {
        console.log(data);
        port.write(data);
    });
})
  
const server = require("http").createServer(app);
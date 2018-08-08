//Init Express.js
const express = require("express");
const app = express();

const static = express.static;
const expressHbs = require("express-handlebars");

app.engine(".hbs", expressHbs({defaultLayout: "layout", extname: ".hbs"}));
app.set("view engine", ".hbs");

app.use(static("public"));




//Init Bluetooth Connection
let sPort = require("serialport");
let readLine = sPort.parsers.Readline;
let robotPort = "/dev/tty.usbmodem411";

let myPort = new sPort(robotPort, {
    baudRate: 9600,
    parser: new readLine("\r\n")
});


//Checks for Connection
myPort.on("open", robotStart);


//Robot Functionality
function robotStart() {
    console.log("Connection Started!");
}


app.get("/", function(request, response) {
    response.render("controlRobot");
    myPort.write(38);
});


//Create Server
app.listen(5000, () => {
    console.log(`Server: http://localhost:5000`);
});
//Init Bluetooth Connection
let sPort = require("serialport");
let serialPort = sPort.serialPort;
let portName = process.argv[2];

let myPort = new serialPort(portName, {
    baudRate: 9600,
    parser: sPort.parsers.Readline("\r\n")
});


//Checks for Connection
myPort.on("open", robotStart);
myPort.on("data", robotRunning);


//Robot Functionality
function robotStart() {
    console.log("Connection Started!");
}

function robotRunning(data) {
    console.log("Robot Currently Running!");
    return(data);
}
//Init React
import {Fragment, Component} from "react";


//Stats
let lightToggle = false;


//Server (Change based on network location)
const URL = "http://192.168.1.71:5000";

//Home http://192.168.1.71:5000
//Atlanta Tech Village http://10.150.41.76:5000


//Robot Controller
class Controller extends Component {
    componentDidMount() {
        //Forward Control (Up Button)
        window.addEventListener("keydown", (keyPress) => {
            if (keyPress.keyCode === 38) {
                //Obtain Movement Data
                fetch(URL + "/up", {
                    method: "get"
                }).then((response) => {
                    return(response.json());
                })
                
            //Log Movement
            console.log("Forward!");
            }
        });
        //Release Button (Up Button)
        window.addEventListener("keyup", (keyRelease) => {
            if (keyRelease.keyCode === 38) {
                //Obtain Movement Data
                fetch(URL + "/", {
                    method: "get"
                }).then((response) => {
                    return(response.json());
                })
            }
        });


        //Reverse Control (Down Button)
        window.addEventListener("keydown", (keyPress) => {
            if (keyPress.keyCode === 40) {
                //Obtain Movement Data
                fetch(URL + "/down", {
                    method: "get"
                }).then((response) => {
                    return(response.json());
                })
                
            //Log Movement
            console.log("Reverse!");
            }
        });
        //Release Button (Down Button)
        window.addEventListener("keyup", (keyRelease) => {
            if (keyRelease.keyCode === 40) {
                //Obtain Movement Data
                fetch(URL + "/", {
                    method: "get"
                }).then((response) => {
                    return(response.json());
                })
            }
        });


        //Right Turn Control (Right Button)
        window.addEventListener("keydown", (keyPress) => {
            if (keyPress.keyCode === 39) {
                //Obtain Movement Data
                fetch(URL + "/right", {
                    method: "get"
                }).then((response) => {
                    return(response.json());
                })
                
            //Log Movement
            console.log("Right!");
            }
        });
        //Release Button (Right Button)
        window.addEventListener("keyup", (keyRelease) => {
            if (keyRelease.keyCode === 39) {
                //Obtain Movement Data
                fetch(URL + "/", {
                    method: "get"
                }).then((response) => {
                    return(response.json());
                })
            }
        });


        //Left Turn Control (Left Button)
        window.addEventListener("keydown", (keyPress) => {
            if (keyPress.keyCode === 37) {
                //Obtain Movement Data
                fetch(URL + "/left", {
                    method: "get"
                }).then((response) => {
                    return(response.json());
                })
                
            //Log Movement
            console.log("Left!");
            }
        });
        //Release Button (Down Button)
        window.addEventListener("keyup", (keyRelease) => {
            if (keyRelease.keyCode === 37) {
                //Obtain Movement Data
                fetch(URL + "/", {
                    method: "get"
                }).then((response) => {
                    return(response.json());
                })
            }
        });


        //Toggle Lights (On)
        window.addEventListener("keypress", (keyPress) => {
            if (keyPress.keyCode === 122 && lightToggle === false) {
                //Obtain Movement Data
                fetch(URL + "/light-on", {
                    method: "get"
                }).then((response) => {
                    return(response.json());
                })
                
            //Log Toggle
            console.log("Toggle Lights!");
            }

            //Toggle Lights (Off)
            if (keyPress.keyCode === 122 && lightToggle === true) {
                //Obtain Movement Data
                fetch(URL + "/light-off", {
                    method: "get"
                }).then((response) => {
                    return(response.json());
                })
                
            //Log Toggle
            console.log("Toggle Lights!");
            }
        });
    }




    //Render Robot Controller
    render() {
        return (Fragment);
    }
}




//Export Object
export default Controller;
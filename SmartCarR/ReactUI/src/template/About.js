//Init React
import React from "react";
import {Link} from "react-router-dom";


//Render Dashboard
class AboutPage extends React.Component {
    render() {
        //About Content
        return (
        <div className="aboutContainer">

            {/*About Image*/}
            <div className="aboutLeft">

                <img src="https://raw.githubusercontent.com/Ryan330/ThorandMillerCarAPI/master/images/devRyan.jpeg" title="Ryan C. Miller"/>

            </div>


            {/*About Summary*/}
            <div className="aboutRight">

                <p>

                    My name is Ryan C. Miller and I am the developer of SmartCar-R. 
                    This was a solo project that I created which manipulates Arduino 
                    and Raspberry Pi technologies with React, Node.js, Javascript, and 
                    C++ coding.

                </p>

                <p>

                    This creation was made as my final project for DigitalCrafts. It 
                    was presented at the "Demo Day" public event in the Atlanta Tech 
                    Village facility.

                </p>

                <p>

                    Check out the GitHub page for more information regarding SmartCar-R!

                </p>

                <p>

                    <Link target="_blank" to="aboutGit">GitHub</Link>

                </p>
            </div>
        
        </div>
        );
    }
}


//Export Object
export default AboutPage;
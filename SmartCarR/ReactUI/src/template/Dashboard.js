//Init React
import React from "react";


//Render Dashboard
class Dashboard extends React.Component {
    render() {
        //Dashboard Content
        return (
        <div>

            {/*Main Dashboard Content*/}
            <div className="mainContainer">

                {/*Video Display*/}
                <div className="videoContainer">

                    <div className="videoBox">
                        
                        <iframe src="http://192.168.1.71:8080"></iframe>

                    </div>

                </div>
            
            </div>


            {/*Controls Information*/}
            <div className="controlsContainer">

                {/*Toggle Lights Controls*/}
                <div className="toggleLightsControlsBox">

                    {/*Toggle Title*/}
                    <span id="controlsBoxTitle"><i className="fa fa-lightbulb"></i> Toggle Lights Controls</span>

                    <br></br>

                    {/*Control Buttons*/}
                    <span className="controlButton">Z</span>
    
                </div>


                {/*Movement Controls*/}
                <div className="movementControlsBox">

                    {/*Movement Title*/}
                    <span id="controlsBoxTitle"><i className="fa fa-car"></i> Movement Controls</span>

                    <br></br>

                    {/*Control Buttons*/}
                    <span className="controlButton">
                    
                        {/*Up Arrow*/}
                        <i className="fas fa-caret-square-up"></i>

                        {/*Down Arrow*/}
                        <i className="fas fa-caret-square-down"></i>

                        {/*Left Arrow*/}
                        <i className="fas fa-caret-square-left"></i>

                        {/*Right Arrow*/}
                        <i className="fas fa-caret-square-right"></i>

                    </span>

                </div>

            </div>

        </div>
        );
    }
}


//Export Object
export default Dashboard;
//Init React
import React, {Component} from "react";


//Object Imports
import Header from "./template/Header";
import Dashboard from "./template/Dashboard";




//Render Page
class App extends Component {
    render() {
        //Site Content
        return (
            <div>
                
                {/*Header Content*/}
                <Header/>


                {/*Dashboard Content*/}
                <Dashboard/>

            </div>
        );
    }
}




//Export Application
export default App;
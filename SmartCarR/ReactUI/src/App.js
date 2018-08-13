//Init React
import React, {Component} from "react";


//Object Imports
import Header from "./template/Header";
import Dashboard from "./template/Dashboard";
import Controller from "./scripts/Controller"


//Render Page
class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        //Site Content
        return (
            <div>
                
                {/*Header Content*/}
                <Header/>


                {/*Dashboard Content*/}
                <Dashboard/>


                {/*Robot Controller*/}
                <Controller/>

            </div>
        );
    }
}


//Export Application
export default App;
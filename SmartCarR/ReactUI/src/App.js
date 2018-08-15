//Init React
import React, {Component} from "react";
import {Route} from "react-router-dom";


//Object Imports
import Header from "./template/Header";
import Dashboard from "./template/Dashboard";
import Controller from "./scripts/Controller";
import About from "./template/About";


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
                <Route path="/" exact={true} component={mainDashboard}/>


                {/*About Page*/}
                <Route path="/about" component={aboutPage}/>


                {/*GitHub Page*/}
                <Route path="/aboutGit" component={() => window.location = "https://github.com/Ryan330/SmartCar-R"}/>

            </div>
        );
    }
}


//Page Functions
//SmartCar-R Dashboard
const mainDashboard = () => {
    return (
        <div>

            {/*Dashboard Layout*/}
            <Dashboard/>

            {/*Robot Controller*/}
            <Controller/>

        </div>
    );
}


//About Page
const aboutPage = () => {
    return (
        <div>

            {/*About Layout*/}
            <About/>

        </div>
    );
}


//Export Application
export default App;
//Init React
import React from "react";
import {Link} from "react-router-dom";


//Render Header
class Header extends React.Component {
    render() {
        //Header Content
        return (
            <header className="customHeader">

                {/*Header Logo*/}
                <div className="customHeaderLeft">

                    {/*React Logo*/}
                    <span className="reactLogo"><i className="fab fa-react"></i></span>

                    {/*SmartCar-R*/}
                    <Link to="/">SmartCar-R</Link>

                </div>


                {/*About Page*/}
                <div className="customHeaderRight">

                    {/*About*/}
                    <Link to="/about"><i className="fa fa-user"></i> About Page</Link>

                </div>                

            </header>
        );
    }
}


//Export Object
export default Header;
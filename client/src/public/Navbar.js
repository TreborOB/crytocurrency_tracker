import React from "react";
import {NavLink} from "react-router-dom";

class Navbar extends React.Component {
    render() {
        return (
            <div>
                <ul className="header">
                    <li><NavLink exact to="/portfolio">Portfolio</NavLink></li>
                    <li><NavLink to="/coinList">Coin List</NavLink></li>
                </ul>
            </div>
        );
    }
}

export default Navbar
import React from "react";
import "./css/App.css";
import "react-table/react-table.css"
import Main from "./public/Main"

class CrytoApp extends React.Component {

    render() {
        return (
            <div className="jumbotron">
                <Main/>
            </div>
        );
    }
}

export default CrytoApp;
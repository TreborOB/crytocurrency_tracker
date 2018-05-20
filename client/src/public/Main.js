import React from "react";
import Portfolio from "./Portfolio"
import CoinList from "./CoinList"
import CoinDetail from "./CoinDetail"
import Navbar from "./Navbar"
import {HashRouter, Route} from "react-router-dom";

class Main extends React.Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <h1>Crytocurrency Tracker</h1>
                    <Navbar/>
                    <div className="content">
                        <Route exact path="/" component={Portfolio}/>
                        <Route exact path="/portfolio" component={Portfolio}/>
                        <Route path="/coinList" component={CoinList}/>
                        <Route path="/coins/:id" component={CoinDetail}/>
                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default Main
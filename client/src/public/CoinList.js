import React from "react";
import axios from "axios";
import * as expressAPI from "../api";
import ReactTable from "react-table" ;
import {Link} from "react-router-dom" ;
import update from "immutability-helper";

class Prices extends React.Component {

    state = {
        cryptos: [],
        portfolio: [],
        amount_purchased: "",
        quantity_purchased: "",
        date: ""
    };

    onClick(e) {
        this.addToPortfolio(e);
        this.removeFromList(e);
        document.getElementById("amount").value =  "";
        document.getElementById("quantity").value =  "";
    }

    addToPortfolio(e) {
        expressAPI.postCrypto(this.state.cryptos[e].name, this.state.cryptos[e].symbol, this.state.cryptos[e].price_eur, this.state.cryptos[e].market_cap_eur,
            this.state.cryptos[e].percent_change_24h, this.state.amount_purchased, this.state.quantity_purchased);
    }

    handleAmountChange = (e) =>  (this.setState({
        amount_purchased: e.target.value
    }));

    handleQuantityChange = (e) =>  (this.setState({
        quantity_purchased: e.target.value
    }));

    removeFromList(index) {
        this.setState(prevState => ({
            cryptos: update(prevState.cryptos, {$splice: [[index, 1]]})
        }));
    }

    componentDidMount() {
        this.fetchCryptocurrencyData();
        this.interval = setInterval(() => this.fetchCryptocurrencyData(), 60 * 100);
    }

    fetchCryptocurrencyData() {
        expressAPI.getAll().then(res => {
            const portfolio = res.data;
            this.setState({portfolio: portfolio});
        });

        axios.get("https://api.coinmarketcap.com/v1/ticker/?convert=EUR&limit=30")
            .then(res => {
                const cryptos = res.data;
                this.setState({cryptos: cryptos});
            });

        this.setState({date: new Date()});
    }

    render() {
        let crypto = this.state.cryptos;
        let portfolio = this.state.portfolio;

        //Only displays crytos that are not already in the Portfolio
        for (let i = crypto.length - 1; i >= 0; i--) {
            for (let j = 0; j < portfolio.length; j++) {
                if (crypto[i] && (crypto[i].name === portfolio[j].name)) {
                    crypto.splice(i, 1);
                }
            }
        }

        const columns = [{
            Header: "Rank",
            accessor: "rank",
        }, {
            Header: "Name",
            accessor: "name",
            Cell: ({row}) => (<Link to={{pathname: `/coins/${row.name}`}}>{row.name}</Link>),
        }, {
            Header: "Symbol",
            accessor: "symbol",
        }, {
            Header: "Price",
            accessor: "price_eur",
        }, {
            Header: "Market Cap (EUR)",
            accessor: "market_cap_eur",
        }, {
            Header: "Percentage Change (24h)",
            accessor: "percent_change_24h",
        }, {
            Header: "Add to Portfolio",
            Cell: row => (
                <div>
                        <button className="btn btn-primary" onClick={() => this.onClick(row.index)}>Add</button>
                        <br/>
                        <input type="number" id="amount" placeholder="amount" min="0" onChange={this.handleAmountChange}/><br/>
                        <input type="number" id="quantity" placeholder="quantity" min="0" onChange={this.handleQuantityChange}/>
                    <p/>
                </div>
            )
        }];

        return (
            <div className="App">
                <p>Last Updated: {this.state.date.toString()}</p>
                <ReactTable
                    data={crypto}
                    columns={columns}
                    minRows={30}
                    defaultPageSize={30}
                />


                <div className="well well-sm">All prices courtesy of cryptocompare.com</div>
            </div>
        )
    }
}

export default Prices;
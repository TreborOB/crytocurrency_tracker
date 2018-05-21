import React from "react";
import ReactTable from "react-table" ;
import {Link} from "react-router-dom" ;
import * as expressAPI from "../api";
import update from "immutability-helper";

class Home extends React.Component {

    state = {
        cryptos: []
    } ;

    async componentDidMount() {
        expressAPI.getAll()
            .then(res => {
                const cryptos = res.data;
                this.setState({cryptos: cryptos});
            }) ;
    }

    onClick(e) {
        this.removeFromList(e);
        this.deleteFromDB(e);
    }

    removeFromList(e) {
        this.setState(prevState => ({
            cryptos: update(prevState.cryptos, {$splice: [[e.id, 1]]})
        }));
    }

    deleteFromDB(e) {
        expressAPI.deleteCryto(e._id)
    }

    render() {

        let totalCoinAmount = 0 ;
        let totalInvested = 0 ;
        for (let i = 0; i < this.state.cryptos.length; i++) {
            totalCoinAmount += this.state.cryptos[i].amount_purchased ;
            totalInvested += this.state.cryptos[i].quantity_purchased
        }

        const columns = [{
            Header: "Name",
            accessor: "name",
            Cell: ({row}) => (<Link to={{pathname: `/coins/${row.name}`}}>{row.name}</Link>),
        }, {
            Header: "Symbol",
            accessor: "symbol"
        }, {
            Header: "Price",
            accessor: "price",
        },  {
            Header: "Chart",
            Cell: row => (
                <div>
                    <button className="btn btn-primary" onClick={() => this.onClick(row.original)}>Remove</button>
                </div>
            )
        },  {
            Header: "Number of Coins",
            accessor: "amount_purchased",
        },  {
            Header: "Total Value",
            accessor: "quantity_purchased",
        }, {
            Header: "Remove From Portfolio",
            Cell: row => (
                <div>
                    <button className="btn btn-primary" onClick={() => this.onClick(row.original)}>Remove</button>
                </div>
            )
        }];

        return (
            <div>
                <h2>Portfolio Information</h2><br/>
                <div className="row">
                    <div className="col-sm-4">
                        <div className="well">Total Number of Crytocurrencies Invested
                            in: {this.state.cryptos.length}</div>
                    </div>
                    <div className="col-sm-4">
                        <div className="well">Total Number of Coins: {totalCoinAmount}</div>
                    </div>
                    <div className="col-sm-4">
                        <div className="well">Total Portfolio Value (€): {totalInvested}</div>
                    </div>
                </div>
                <ReactTable highlight
                    data={this.state.cryptos}
                    columns={columns}
                    minRows={10}
                    defaultPageSize={10}
                />
            </div>
        );
    }
}

export default Home
import React from "react";
import axios from "axios";
import _ from "lodash";

class coinDetail extends React.Component {

    state = {
        cryptos: [],
        coinName: this.props.match.params.id
    };

    componentDidMount() {
        let coinName = this.props.match.params.id ;
        this.setState({coinName: coinName});

        axios.get("https://api.coinmarketcap.com/v1/ticker/?convert=EUR&limit=30")
            .then(res => {
                const cryptos = res.data;
                let allCoinDetails = _.find(cryptos, "name", coinName);
                this.setState({cryptos: allCoinDetails});
            });
    }

    render() {
        return (
                <div>
                    <div className="panel panel-primary">
                        <div className="panel-heading"><h2>{this.state.coinName}</h2></div>
                            <div className="panel-body">
                                {Object.keys(this.state.cryptos).map((key) => (
                                    <tr className="">
                                        <td>{key}</td>
                                        <td>{this.state.cryptos[key]}</td>
                                    </tr>
                                ))}
                                </div>
                    </div>
                <div className="coinmarketcap-currency-widget" data-currencyid={1} data-base="EUR">Please
                    refresh the page
                </div>
            </div>
        );
    }
}

export default coinDetail
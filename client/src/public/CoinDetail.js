import React from "react";
import axios from "axios";
import _ from "lodash";
import CryptowatchEmbed from 'cryptowatch-embed';

class coinDetail extends React.Component {

    state = {
        cryptos: [],
        coinSymbol: this.props.match.params.id
    };

    componentDidMount() {
        let coinName = this.props.match.params.id ;
        this.setState({coinSymbol: coinName});

        axios.get("https://api.coinmarketcap.com/v1/ticker/?convert=EUR&limit=30")
            .then(res => {
                const cryptos = res.data;
                let allCoinDetails = _.find(cryptos, "symbol", coinName);
                this.setState({cryptos: allCoinDetails});
            });

        //let chart = new CryptowatchEmbed('bitfinex', 'btcusd');

        console.log(this.state.coinSymbol) ;

        let chart = new CryptowatchEmbed('kraken', this.state.coinSymbol+'eur', {
            width: 1500,
            height: 500,
        });
        chart.mount('#chart-container');
    }



    render() {
        return (
                <div>
                    <div className="panel panel-primary">
                        <div className="panel-heading"><h2>{this.state.coinSymbol}</h2></div>
                            <div className="panel-body">
                                <div id="chart-container"></div>
                                </div>
                    </div>
            </div>
        );
    }
}

export default coinDetail
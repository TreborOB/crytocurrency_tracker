import React from "react";

class AdditionalInfo extends React.Component {
    render() {
        let cryto = this.props.allCoinDetails;
        return (
            <div>
                <div className="panel panel-primary">
                    <div className="panel-heading"><h2>{cryto}</h2></div>
                    <div className="panel-body"><p>{cryto}</p>
                        <h3>Transaction Volume</h3>
                        <p>{cryto}</p>
                        <p>{cryto}</p></div>
                </div>
            </div>
        );
    }
}

export default AdditionalInfo;
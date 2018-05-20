import crytosModel from "./api/crytos/crytoModel";

const crytos = [
    {
        "name": "New Cryto 1",
        "symbol": "XYZ",
        "price": "100",
        "market_cap_eur": "100",
        "percent_change_24h": "100",
        "amount_purchased": "100",
        "quantity_purchased": "100",
    },
    {
        "name": "New Cryto 2",
        "symbol": "XYR",
        "price": "200",
        "market_cap_eur": "200",
        "percent_change_24h": "200",
        "amount_purchased": "100",
        "quantity_purchased": "100",
    }
];

export const loadCrytos = () => {
    crytosModel.find({}).remove(() => {
        crytos.forEach((cryto) => {
            crytosModel.create(cryto, (err, docs) => {
                    if (err) {
                        console.log(`failed to Load Crytos Data: ${err}`);
                    }
                }
            );
        });
        console.info(`${crytos.length} crytos were successfully stored.`);
    });
};
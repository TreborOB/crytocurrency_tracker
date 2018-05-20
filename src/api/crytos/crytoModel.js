import mongoose from "mongoose";

const Schema = mongoose.Schema;

const crytoSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true,
    },
    symbol: {
        type: String,
        unique: true,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    market_cap_eur: {
        type: Number,
        required: true,
    },
    percent_change_24h: {
        type: Number,
        required: true,
    },
    amount_purchased: {
        type: Number,
        required: true,
    },
    quantity_purchased: {
        type: Number,
        required: true,
    },
});


export default mongoose.model("Cryto", crytoSchema);
import axios from "axios";

export const getAll = async () => {
    //const resp = await axios.get("/api/cryptos",{headers: {"Authorization": auth.getToken()}}) ;
    return await axios.get("/api/crytos");
};

export const postCrypto = async (name, symbol, price, market_cap_eur, percent_change_24h, amount_purchased, quantity_purchased) => {
    const resp = await axios.post("/api/crytos", {
        name: name, symbol: symbol ,price: price, market_cap_eur: market_cap_eur,
        percent_change_24h: percent_change_24h, amount_purchased: amount_purchased, quantity_purchased: quantity_purchased
    });
    return resp.data;
};

export const deleteCryto = async (id) => {
    const resp = await axios.delete(`/api/crytos/${id}`);
    return resp.data;
};

export const login = async (username, password) => {
    const resp = await axios.post('/api/users', { username: username, password: password });
    return resp.data;
};

export const signup = async (username, password) => {
    const resp = await axios.post('/api/users?action=register', { username: username, password: password });
    return resp.data;
};
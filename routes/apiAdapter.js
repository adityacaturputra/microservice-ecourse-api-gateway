const axios = require('axios');
const {TIMEOUT} = process.env;

module.exports = (baseUrl) => {
    const api = axios.create({
        baseUrl,
        timeout: parseInt(TIMEOUT),
    })

    return api;
}
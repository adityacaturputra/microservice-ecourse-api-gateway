// const apiAdapter = require('../../apiAdapter');
const axios = require('axios');
const {
    URL_SERVICE_MEDIA,
} = process.env;

// const api = apiAdapter(URL_SERVICE_MEDIA, URL_SERVICE_MEDIA_PORT);

module.exports = async (req, res) => {
    try {
        const media = await axios.get(`${URL_SERVICE_MEDIA}/media`);
        return res.json(media.data);
    } catch (error) {
        if(error.code === 'ECONNREFUSED') {
            return res.status(500).json({ status: 'error', message: 'service unavailable' })
        }
        const { status, data } = error.response;
        return res.status(status).json(data);
    } 
}
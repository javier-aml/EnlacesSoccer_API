const model = require('../models/BuscarJugadores');
const url = require('url');

exports.get = async (req, res) => {
    const params = url.parse(req.url, true).query;
    const data = await model.BuscarJugadores(params);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('content-type', 'application/json; charset=utf-8');
    res.json(data);
};

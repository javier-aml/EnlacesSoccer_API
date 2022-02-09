const model = require('../models/EliminarEquipo');
const url = require('url');

exports.delete = async (req, res) => {
    const body = req.body.data;
    const params = url.parse(req.url, true).query;
    const data = await model.EliminarEquipo(body, params);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'DELETE');
    res.setHeader('content-type', 'application/json; charset=utf-8');
    res.json(data);
};

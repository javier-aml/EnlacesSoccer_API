const model = require('../models/ActivarEquipo');
const url = require('url');

exports.patch = async (req, res) => {
    const body = req.body.data;
    const params = url.parse(req.url, true).query;
    const data = await model.ActivarEquipo(body, params);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'PATCH');
    res.setHeader('content-type', 'application/json; charset=utf-8');
    res.json(data);
};

const model = require('../models/ActualizarLiga');

exports.put = async (req, res) => {
    const body = req.body.data;
    const data = await model.ActualizarLiga(body);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'PUT');
    res.setHeader('content-type', 'application/json; charset=utf-8');
    res.json(data);
};

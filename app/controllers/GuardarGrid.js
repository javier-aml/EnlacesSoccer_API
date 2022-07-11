const model = require('../models/GuardarGrid');

exports.post = async (req, res) => {
    const body = req.body.data;
    const data = await model.GuardarGrid(body);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST');
    res.setHeader('content-type', 'application/json; charset=utf-8');
    res.json(data);
};

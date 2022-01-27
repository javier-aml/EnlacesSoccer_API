const model = require('../models/ConsultarEquipos');
const url = require('url');

exports.get = async (req, res) => {
    const params = url.parse(req.url, true).query;
    let data = await model.ConsultarEquipos(params);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.json(data);
};

const model = require('../models/ConsultarArbitros');

const getData = async (req, res) => await res.send(model.ConsultarArbitros);

exports.get = getData;

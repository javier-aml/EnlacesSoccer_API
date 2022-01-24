const model = require('../models/ConsultarTorneos');

const getData = async (req, res) => await res.send(model.ConsultarTorneos);

exports.get = getData;

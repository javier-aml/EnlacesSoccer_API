const model = require('../models/ConsultarEquipos');

const getData = async (req, res) => await res.send(model.ConsultarEquipos);

exports.get = getData;

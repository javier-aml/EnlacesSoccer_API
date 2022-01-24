const model = require('../models/BuscaJugador');

const getData = async (req, res) => await res.send(model.BuscaJugador);

exports.get = getData;

const model = require('../models/DefaultRoute');

const getData = async (req, res) => await res.send(model.DefaultRoute);

exports.get = getData;

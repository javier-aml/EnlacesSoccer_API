const express = require('express');
const router = express.Router();

const defaultRoute = require('../controllers/DefaultRoute');
const consultarEquipos = require('../controllers/ConsultarEquipos');

router.get('/', defaultRoute.get);
router.get('/ConsultarEquipos', consultarEquipos.get);

module.exports = router;
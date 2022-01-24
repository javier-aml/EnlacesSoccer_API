const express = require('express');
const router = express.Router();

const defaultRoute = require('../controllers/DefaultRoute');
const consultarEquipos = require('../controllers/ConsultarEquipos');
const consultarArbitros = require('../controllers/ConsultarArbitros');
const consultarTorneos = require('../controllers/ConsultarTorneos');

router.get('/', defaultRoute.get);
router.get('/ConsultarEquipos', consultarEquipos.get);
router.get('/ConsultarArbitros', consultarArbitros.get);
router.get('/ConsultarTorneos', consultarTorneos.get);

module.exports = router;
const express = require('express');
const router = express.Router();

const defaultRoute = require('../controllers/DefaultRoute');
const consultarEquipos = require('../controllers/ConsultarEquipos');
const consultarArbitros = require('../controllers/ConsultarArbitros');

router.get('/', defaultRoute.get);
router.get('/ConsultarEquipos', consultarEquipos.get);
router.get('/ConsultarArbitros', consultarArbitros.get);

module.exports = router;
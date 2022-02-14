const express = require('express');
const router = express.Router();
const passport = require('passport');

const defaultRoute = require('../controllers/DefaultController');
const buscarLiga = require('../controllers/BuscarLiga');
const consultarLiga = require('../controllers/ConsultarLiga');
const consultarLigas = require('../controllers/ConsultarLigas');
const guardarLiga = require('../controllers/GuardarLiga');
const actualizarLiga = require('../controllers/ActualizarLiga');
const activarLiga = require('../controllers/ActivarLiga');
const eliminarLiga = require('../controllers/EliminarLiga');
const consultarPaises = require('../controllers/ConsultarPaises');
const consultarEstados = require('../controllers/ConsultarEstados');
const consultarMunicipios = require('../controllers/ConsultarMunicipios');

const actualizarEquipo = require('../controllers/ActualizarEquipo');
const guardarEquipo = require('../controllers/GuardarEquipo');
const eliminarEquipo = require('../controllers/EliminarEquipo');
const consultarEquipo = require('../controllers/ConsultarEquipo');
const buscarEquipos = require('../controllers/BuscarEquipos');
const activarEquipo = require('../controllers/ActivarEquipo');

const login = require('../auth/controllers/login');
const validsession = require('../auth/controllers/validsession');

router.get('/', defaultRoute.get);
router.get('/BuscarLiga', buscarLiga.get);
router.get('/ConsultarLiga', consultarLiga.get);
router.get('/ConsultarLigas', consultarLigas.get);
router.post('/GuardarLiga', guardarLiga.post);
router.put('/ActualizarLiga', actualizarLiga.put);
router.patch('/ActivarLiga', activarLiga.patch);
router.delete('/EliminarLiga', eliminarLiga.delete);
router.get('/ConsultarPaises', consultarPaises.get);
router.get('/ConsultarEstados', consultarEstados.get);
router.get('/ConsultarMunicipios', consultarMunicipios.get);

router.put('/ActualizarEquipo', actualizarEquipo.put);
router.post('/GuardarEquipo', guardarEquipo.post);
router.delete('/EliminarEquipo', eliminarEquipo.delete);
router.get('/ConsultarEquipo', consultarEquipo.get);
router.get('/BuscarEquipos', buscarEquipos.get);
router.patch('/ActivarEquipo', activarEquipo.patch);

router.post('/login', login.post);
router.get('/validsession', passport.authenticate('jwt', {session: false}), validsession.get);

module.exports = router;
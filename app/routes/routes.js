const express = require('express');
const router = express.Router();
const passport = require('passport');

const defaultRoute = require('../controllers/DefaultController');
const buscarLiga = require('../controllers/BuscarLiga');
const consultarLigas = require('../controllers/ConsultarLigas');
const guardarLiga = require('../controllers/GuardarLiga');
const actualizarLiga = require('../controllers/ActualizarLiga');
const activarLiga = require('../controllers/ActivarLiga');
const eliminarLiga = require('../controllers/EliminarLiga');
const consultarPaises = require('../controllers/ConsultarPaises');
const consultarEstados = require('../controllers/ConsultarEstados');
const consultarMunicipios = require('../controllers/ConsultarMunicipios');

const login = require('../auth/controllers/login');
const validsession = require('../auth/controllers/validsession');

router.get('/', defaultRoute.get);
router.get('/BuscarLiga', buscarLiga.get);
router.get('/ConsultarLigas', consultarLigas.get);
router.post('/GuardarLiga', guardarLiga.post);
router.put('/ActualizarLiga', actualizarLiga.put);
router.patch('/ActivarLiga', activarLiga.patch);
router.delete('/EliminarLiga', eliminarLiga.delete);
router.get('/ConsultarPaises', consultarPaises.get);
router.get('/ConsultarEstados', consultarEstados.get);
router.get('/ConsultarMunicipios', consultarMunicipios.get);

router.post('/login', login.post);
router.get('/validsession', passport.authenticate('jwt', {session: false}), validsession.get);

module.exports = router;
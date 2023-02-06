const express = require('express');
const router = express.Router();
const passport = require('passport');


const consultarEquipos = require('../controllers/ConsultarEquipos');
const consultarEstados = require('../controllers/ConsultarEstados');
const consultarGrid = require('../controllers/ConsultarGrid');
const consultarLigas = require('../controllers/ConsultarLigas');
const consultarMunicipios = require('../controllers/ConsultarMunicipios');
const consultarPaises = require('../controllers/ConsultarPaises');
const consultarTorneos = require('../controllers/ConsultarTorneos');
const defaultRoute = require('../controllers/DefaultController');
const guardarGrid = require('../controllers/GuardarGrid');

const login = require('../auth/controllers/login');
const validsession = require('../auth/controllers/validsession');


router.get('/ConsultarEquipos', consultarEquipos.get);
router.get('/ConsultarEstados', consultarEstados.get);
router.get('/ConsultarGrid', consultarGrid.get);
router.get('/ConsultarLigas', consultarLigas.get);
router.get('/ConsultarMunicipios', consultarMunicipios.get);
router.get('/ConsultarPaises', consultarPaises.get);
router.get('/ConsultarTorneos', consultarTorneos.get);
router.get('/', defaultRoute.get);
router.post('/GuardarGrid', guardarGrid.post);

router.post('/login', login.post);
router.get('/validsession', passport.authenticate('jwt', {session: false}), validsession.get);

module.exports = router;
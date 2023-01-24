const mssql = require('mssql');
const sqlConfig = require('../config/db');

exports.GuardarJugador = async (body) => {
  try {
    const pool = await mssql.connect(sqlConfig);
    const result = await pool.request()
      .input('pnIdLiga', body.pnIdLiga)
      .input('pnIdTorneo', body.pnIdTorneo)
      .input('pnIdEquipo', body.pnIdEquipo)
      .input('psNombre', body.psNombre)
      .input('psTelefono', body.psTelefono)
      .input('pnActivo', body.pnActivo)
      .input('psNombrePcMod', body.psNombrePcMod)
      .input('pnClaUsuarioMod', body.pnClaUsuarioMod)
      .execute('GuardarJugador');
    return result.recordsets[0];
  } catch (err) {
    return err;
  }
};
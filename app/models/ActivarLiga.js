const mssql = require('mssql');
const sqlConfig = require('../config/db');

exports.ActivarLiga = async (body, params) => {
  try {
    const pool = await mssql.connect(sqlConfig);
    const result = await pool.request()
      .input('nIdLiga', params.nIdLiga)
      .input('dFechaUltimaMod', body.dFechaUltimaMod)
      .input('sNombrePcMod', body.sNombrePcMod)
      .input('nClaUsuarioMod', body.nClaUsuarioMod)
      .execute('ActivarLiga');
    return result.recordsets[0];
  } catch (err) {
    return err;
  }
};
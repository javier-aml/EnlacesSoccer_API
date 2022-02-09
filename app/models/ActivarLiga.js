const mssql = require('mssql');
const sqlConfig = require('../config/db');

exports.ActivarLiga = async (body, params) => {
  try {
    const pool = await mssql.connect(sqlConfig);
    const result = await pool.request()
      .input('pnIdLiga', params.pnIdLiga)
      .input('pdFechaUltimaMod', body.pdFechaUltimaMod)
      .input('psNombrePcMod', body.psNombrePcMod)
      .input('pnClaUsuarioMod', body.pnClaUsuarioMod)
      .execute('ActivarLiga');
    return result.recordsets[0];
  } catch (err) {
    return err;
  }
};
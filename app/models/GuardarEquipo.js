const mssql = require('mssql');
const sqlConfig = require('../config/db');

exports.GuardarEquipo = async (body) => {
  try {
    const pool = await mssql.connect(sqlConfig);
    const result = await pool.request()
      .input('pnIdLiga', body.pnIdLiga)
      .input('psNombre', body.psNombre)
      .input('pnActivo', body.pnActivo)
      .input('psNombrePcMod', body.psNombrePcMod)
      .input('pnClaUsuarioMod', body.pnClaUsuarioMod)
      .execute('GuardarEquipo');
    return result.recordsets[0];
  } catch (err) {
    return err;
  }
};
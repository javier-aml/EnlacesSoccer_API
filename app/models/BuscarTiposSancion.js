const mssql = require('mssql');
const sqlConfig = require('../config/db');

exports.BuscarTiposSancion = async (params) => {
  try {
    const pool = await mssql.connect(sqlConfig);
    const result = await pool.request()
      .input('pnIdLiga', params.pnIdLiga)
      .input('pnActivo', params.pnActivo)
      .execute('BuscarTiposSancion');
    return result.recordsets[0];
  } catch (err) {
    return err;
  }
};
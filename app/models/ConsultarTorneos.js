const mssql = require('mssql');
const sqlConfig = require('../config/db');

exports.ConsultarTorneos = async (params) => {
  try {
    const pool = await mssql.connect(sqlConfig);
    const result = await pool.request()
      .input('pnActivo', params.pnActivo)
      .input('pnIdLiga', params.pnIdLiga)
      .execute('ConsultarTorneos');
    return result.recordsets[0];
  } catch (err) {
    return err;
  }
};
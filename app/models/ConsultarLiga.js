const mssql = require('mssql');
const sqlConfig = require('../config/db');

exports.ConsultarLigas = async (params) => {
  try {
    const pool = await mssql.connect(sqlConfig);
    const result = await pool.request()
      .input('pnIdLiga', params.pnIdLiga)
      .execute('ConsultarLiga');
    return result.recordsets[0];
  } catch (err) {
    return err;
  }
};
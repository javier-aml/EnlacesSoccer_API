const mssql = require('mssql');
const sqlConfig = require('../config/db');

exports.ConsultarEquipo = async (params) => {
  try {
    const pool = await mssql.connect(sqlConfig);
    const result = await pool.request()
      .input('pnIdLiga', params.pnIdLiga)
      .input('pnIdEquipo', params.pnIdEquipo)
      .execute('ConsultarEquipo');
    return result.recordsets[0];
  } catch (err) {
    return err;
  }
};
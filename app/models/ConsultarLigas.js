const mssql = require('mssql');
const sqlConfig = require('../config/db');

exports.ConsultarLigas = async (params) => {
  try {
    const pool = await mssql.connect(sqlConfig);
    const result = await pool.request().input('nIdLiga', params.nIdLiga).execute('ConsultarLigas');
    return result.recordsets[0];
  } catch (err) {
    return err;
  }
};
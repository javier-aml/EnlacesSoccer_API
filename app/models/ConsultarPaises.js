const mssql = require('mssql');
const sqlConfig = require('../config/db');

exports.ConsultarPaises = async (params) => {
  try {
    const pool = await mssql.connect(sqlConfig);
    const result = await pool.request().input('nActivo', params.nActivo).execute('ConsultarPaises');
    return result.recordsets[0];
  } catch (err) {
    return err;
  }
};
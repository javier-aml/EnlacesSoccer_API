const mssql = require('mssql');
const sqlConfig = require('../config/db');

exports.ConsultarGrid = async (params) => {
  try {
    const pool = await mssql.connect(sqlConfig);
    const result = await pool.request()
      .input('psTabla', params.pnTabla)
      .input('psColumnas', params.pnColumnas)
      .execute('ConsultarGrid');
    return result.recordsets[0];
  } catch (err) {
    return err;
  }
};
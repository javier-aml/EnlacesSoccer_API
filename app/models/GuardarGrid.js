const mssql = require('mssql');
const sqlConfig = require('../config/db');

exports.GuardarGrid = async (body) => {
  try {
    const pool = await mssql.connect(sqlConfig);
    const result = await pool.request()
      .input('psTabla', body.psTabla)
      .input('psDatos', body.psDatos)
      .execute('GuardarGrid');
    return result.recordsets[0];
  } catch (err) {
    return err;
  }
};
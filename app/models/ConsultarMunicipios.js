const mssql = require('mssql');
const sqlConfig = require('../config/db');

exports.ConsultarMunicipios = async (params) => {
  try {
    const pool = await mssql.connect(sqlConfig);
    const result = await pool.request()
      .input('pnActivo', params.pnActivo)
      .execute('ConsultarMunicipios');
    return result.recordsets[0];
  } catch (err) {
    return err;
  }
};
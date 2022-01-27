const mssql = require('mssql');
const sqlConfig = require('../config/db');

exports.ConsultarEquipos = async (args) => {
  try {
    const pool = await mssql.connect(sqlConfig);
    const result = await pool.request().input('nActivo', args.nActivo).execute('ConsultarEquipos');
    return result.recordsets[0];
  } catch (err) {
    return err;
  }
};
const mssql = require('mssql');
const sqlConfig = require('../config/db');

const getData = async () => {
  try {
    const pool = await mssql.connect(sqlConfig);
    const result = await pool.request().input('nActivo', 1).execute('ConsultarEquipos');
    exports.ConsultarEquipos = result.recordsets[0];
  } catch (err) {
    exports.ConsultarEquipos = err;
  }
};

getData();
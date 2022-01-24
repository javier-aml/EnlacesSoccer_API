const mssql = require('mssql');
const sqlConfig = require('../config/db');

const sqlQuery = 'select * from Arbitro';

const getData = async () => {
  try {
    await mssql.connect(sqlConfig);
    exports.ConsultarEquipos = await mssql.query(sqlQuery);
  } catch (err) {
    exports.ConsultarEquipos = err;
  }
};

getData();
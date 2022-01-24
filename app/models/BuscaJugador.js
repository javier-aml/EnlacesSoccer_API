const mssql = require('mssql');
const sqlConfig = require('../config/db');

const getData = async () => {
  try {
    const pool = await mssql.connect(sqlConfig);
    const result = await pool.request().input('nombre', '').execute('BuscaJugador');
    exports.BuscaJugador = result.recordsets[0];
  } catch (err) {
    exports.BuscaJugador = err;
  }
};

getData();
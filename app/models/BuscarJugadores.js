const mssql = require('mssql');
const sqlConfig = require('../config/db');

exports.BuscarJugadores = async (params) => {
  try {
    const pool = await mssql.connect(sqlConfig);
    const result = await pool.request()
      .input('pnIdLiga', params.pnIdLiga)
      .input('pnIdTorneo', params.pnIdTorneo)
      .input('pnIdEquipo', params.pnIdEquipo)
      .input('pnActivo', params.pnActivo)
      .execute('BuscarJugadores');
    return result.recordsets[0];
  } catch (err) {
    return err;
  }
};
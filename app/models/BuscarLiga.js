const mssql = require('mssql');
const sqlConfig = require('../config/db');

exports.BuscarLiga = async (params) => {
  try {
    const pool = await mssql.connect(sqlConfig);
    const result = await pool.request()
      .input('psNombre', params.psNombre)
      .input('pnIdPais', params.pnIdPais)
      .input('pnIdEstado', params.pnIdEstado)
      .input('pnIdMunicipio', params.pnIdMunicipio)
      .execute('BuscarLiga');
    return result.recordsets[0];
  } catch (err) {
    return err;
  }
};
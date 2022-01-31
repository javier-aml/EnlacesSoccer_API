const mssql = require('mssql');
const sqlConfig = require('../config/db');

exports.BuscarLiga = async (params) => {
  try {
    const pool = await mssql.connect(sqlConfig);
    const result = await pool.request()
      .input('sNombre', params.sNombre)
      .input('nIdPais', params.nIdPais)
      .input('nIdEstado', params.nIdEstado)
      .input('nIdMunicipio', params.nIdMunicipio)
      .execute('BuscarLiga');
    return result.recordsets[0];
  } catch (err) {
    return err;
  }
};
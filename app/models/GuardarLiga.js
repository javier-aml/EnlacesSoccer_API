const mssql = require('mssql');
const sqlConfig = require('../config/db');

exports.GuardarLiga = async (body) => {
  try {
    const pool = await mssql.connect(sqlConfig);
    const result = await pool.request()
      .input('sNombre', body.sNombre)
      .input('sRepresentante', body.sRepresentante)
      .input('nTelefono', body.nTelefono)
      .input('sCorreo', body.sCorreo)
      .input('nIdPais', body.nIdPais)
      .input('nIdEstado', body.nIdEstado)
      .input('nIdMunicipio', body.nIdMunicipio)
      .input('nActivo', body.nActivo)
      .input('dFechaUltimaMod', body.dFechaUltimaMod)
      .input('sNombrePcMod', body.sNombrePcMod)
      .input('nClaUsuarioMod', body.nClaUsuarioMod)
      .execute('GuardarLiga');
    return result.recordsets[0];
  } catch (err) {
    return err;
  }
};
const mssql = require('mssql');
const sqlConfig = require('../config/db');

exports.GuardarLiga = async (body) => {
  try {
    const pool = await mssql.connect(sqlConfig);
    const result = await pool.request()
      .input('psNombre', body.psNombre)
      .input('psRepresentante', body.psRepresentante)
      .input('pnTelefono', body.pnTelefono)
      .input('psCorreo', body.psCorreo)
      .input('pnIdPais', body.pnIdPais)
      .input('pnIdEstado', body.pnIdEstado)
      .input('pnIdMunicipio', body.pnIdMunicipio)
      .input('pnActivo', body.pnActivo)
      .input('pdFechaUltimaMod', body.pdFechaUltimaMod)
      .input('psNombrePcMod', body.psNombrePcMod)
      .input('pnClaUsuarioMod', body.pnClaUsuarioMod)
      .execute('GuardarLiga');
    return result.recordsets[0];
  } catch (err) {
    return err;
  }
};
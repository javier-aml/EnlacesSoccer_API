const dbConfig = {
  user: 'sadmin',
  password: 'Nimdas2022@',
  database: 'EnlacesSoccer',
  server: 'enlacessoccer.database.windows.net',
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000
  },
  options: {
    encrypt: true,
    trustServerCertificate: true
  }
}

module.exports = dbConfig;

require('dotenv').config();
const nconf = require('nconf');
const path = require('path');

module.exports = nconf
  .file({ file: path.join(__dirname, './config.json') })
  .defaults({
    PORT: 8080,
    HOST: '0.0.0.0',
  })
  .argv()
  .env();

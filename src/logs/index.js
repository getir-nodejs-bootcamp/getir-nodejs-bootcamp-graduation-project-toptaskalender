const fs    = require('fs');
const path  = require('path');

const requestLogStream = fs.createWriteStream(
  path.join(__dirname, 'request.log'),
  { flags: 'a' }
);

module.exports = {
  requestLogStream
}
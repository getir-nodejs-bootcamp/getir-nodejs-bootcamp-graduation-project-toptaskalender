const configure = require('./config');
const load      = require('./loaders');
const app       = require('./app');

configure();
load();

app.listen(process.env.APP_PORT, () => {
  console.log(`Server is running on port: ${process.env.APP_PORT} ✅`);
});
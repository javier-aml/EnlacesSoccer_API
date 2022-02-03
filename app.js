const express = require('express');
const routes = require('./app/routes/routes');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.set('port', port);
app.use('/', routes);

const main = () => app.listen(app.get('port'), () => console.log(`Server is running on port ${app.get('port')}.`));

main();
const express = require('express');
const bodyParser = require('body-parser');
const connectToDatabase = require('./config/db');
const app = express();
const routes = require('./routes/psaps')
const port = process.env.PORT || 8082;


connectToDatabase();

app.use(routes);
app.listen(port, () => console.log(`Server running on port ${port}`));
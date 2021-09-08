const express = require('express');
const bodyParser = require('body-parser');
const connectToDatabase = require('./config/db');
let cors = require('cors');
const app = express();
const routes = require('./routes/psaps')
let port = process.env.PORT;
if (port == null || port == "") {
    port == 8082;
}


connectToDatabase();


app.use(cors({ origin: true, credentials: true }));
app.use(express.json({ extended: false }));
app.use(routes);
app.listen(port, () => console.log(`Server running on port ${port}`));
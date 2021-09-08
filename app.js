const express = require('express');
const bodyParser = require('body-parser');
const connectToDatabase = require('./config/db');
let cors = require('cors');
const app = express();
const routes = require('./routes/psaps')
const port = process.env.PORT || 8082;


connectToDatabase();


app.use(cors({ origin: true, credentials: true }));
app.use(express.json({ extended: false }));
app.use(routes);
app.listen(port, () => console.log(`Server running on port ${port}`));

/* "build": "CI=false && react-scripts build", */
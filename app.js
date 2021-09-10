const express = require('express');
const bodyParser = require('body-parser');
const connectToDatabase = require('./config/db');
let cors = require('cors');
const path = require("path");
const app = express();
const routes = require('./routes/psaps')
const port = process.env.PORT || 8082;


connectToDatabase();
app.use(cors({ origin: true, credentials: true }));
app.use(express.json({ extended: false }));
app.use('/', express.static(path.join(__dirname, '../client/build')));
app.use(routes);


if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
    app.get("*", function(req, res) {
      res.sendFile(path.join(__dirname, "./client/build/index.html"));
    });
  }


app.listen(port, () => console.log(`Server running on port ${port}`));

/* "build": "CI=false && react-scripts build", */
/*--
,
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-router-dom": "^5.2.0",
    "react-scripts": "4.0.3"
--*/
/*--
Requiring all needed dependencies including Express for the back-end, cors to aid HTTP requests,
path to help with running React from the backend, utilizing modularized routes, & more.
--*/

const express = require('express');
const bodyParser = require('body-parser');
const connectToDatabase = require('./config/db');
const cors = require('cors');
const path = require("path");
const app = express();
const routes = require('./routes/psaps')
const port = process.env.PORT || 8082;



/*--
Connecting to MongoDB database, listing what actions the backend will need to facilitate.
--*/

connectToDatabase();
app.use(cors({ origin: true, credentials: true }));
app.use(express.json({ extended: false }));
app.use('/', express.static(path.join(__dirname, '/client/build')));
/*- app.use('*', express.static(path.join(__dirname, "client", "build"))) -*/
app.use('/api', routes);



/*--
TASK: Need to investigate why Heroku is not having the front end utilize ./client/build
--*/

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('/*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}



app.listen(port, () => console.log(`Server running on port ${port}`));
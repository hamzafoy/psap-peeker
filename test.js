const mongoose = require('mongoose');
const connectToDatabase = require('./config/db');
const Psap = require('./models/PSAP');
connectToDatabase();

Psap.create({
    county: 'Jefferson',
    state: 'Kentucky',
    phone_number: 5025742111
})
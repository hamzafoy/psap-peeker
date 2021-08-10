const express = require('express');
const router = express.Router();
const Psap = require('../models/PSAP')

function asyncHandler(cb) {
    return async(req, res, next) => {
        try {
            await cb(req, res, next)
        } catch(error) {
            next(error);
        }
    }
}

router.get('/test', (req, res) => {
    res.send(`This app is currently being built, this is a test page.`)
})

router.get('/', (req, res) => {
    Psap.find()
        .then(psaps => res.json(psaps))
        .catch(err => res.status(404).json( { nopsapsfound: 'No PSAPs found' }))
})

module.exports = router;
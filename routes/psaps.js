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

router.get('/', (req, res) => {
    Psap.find()
        .then(psaps => res.json(psaps))
        .catch(err => res.status(404).json( { nopsapsfound: 'No PSAPs found' }))
});

router.get('/search-psap'), (req, res) => {
    Psap.find(req.body)
        .then(psap => res.json(psap))
        .catch(err => res.status(404).json( { nopsapfound: 'No such PSAP found' }))
}

router.post('/', (req, res) => {
    Psap.create(req.body)
        .then(psap => res.json({ msg: `The PSAP has been entered successfully!` }))
})

module.exports = router;
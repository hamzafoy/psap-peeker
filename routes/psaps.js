const express = require('express');
const router = express.Router();
const Psap = require('../models/PSAP')

router.get('/', (req, res) => {
    Psap.find()
        .then(psaps => res.json(psaps))
        .catch(err => res.status(404).json( { nopsapsfound: 'No PSAPs found' }))
});

router.get('api/search-psap/:id'), (req, res) => {
    Psap.findOne(req.params.county, (error, data) => {
        if (error) {
            return error
        } else {
            res.json(data)
        }
    })
}

router.post('/api', (req, res) => {
    Psap.create(req.body)
        .then(psap => res.json({ msg: `The PSAP has been entered successfully!` }))
})

module.exports = router;

/*
Psap.findOne({
        county: req.query
    })
        .then(psap => res.json(psap))
        .catch(err => res.status(404).json( { nopsapfound: 'No such PSAP found' }))
        T
*/
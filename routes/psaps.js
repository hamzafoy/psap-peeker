/*--
Requiring Express, enabling routing, and pulling the PSAP model for use with
database transactions.
--*/

const express = require('express');
const router = express.Router();
const Psap = require('../models/PSAP');



/*--
Handling GET request to load full list of PSAPS, GET request for
finding a single PSAP by county name, and POST request to add PSAPS.
--*/

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

router.post('/', (req, res) => {
    Psap.create(req.body)
        .then(psap => res.json({ msg: `The PSAP has been entered successfully!` }))
})

module.exports = router;
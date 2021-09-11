/*--
Creating the Scheme for the MongoDB database.
TASK: Create validations to prevent people from adding empty entries to the database
or handle accidental half-filled submissions.
--*/

const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const PsapContactSchema = new Schema({
    county: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    phone_number: {
        type: Number,
        required: true
    }
});



const PsapContact = mongoose.model('PsapContact', PsapContactSchema);
module.exports = PsapContact;
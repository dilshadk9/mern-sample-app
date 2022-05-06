const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UserSchema = new Schema({
    firstName: { type: String, max: 100 },
    lastName: { type: String, max: 100 },
    email: { type: String, max: 150 },
    gender: { type: String, max: 10 },
    dateOfBirth: { type: Date },
    password: { type: String, max: 100 },
});


// Export the model
module.exports = mongoose.model('User', UserSchema);
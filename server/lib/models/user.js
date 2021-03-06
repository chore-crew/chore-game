const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');

const schema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String
    },
    description: {
        type: String
    },
    houseId: {
        type: Schema.Types.ObjectId,
        ref: 'House'
    },
    // may not need this afterall -- made new model
    // TODO: make decision re above
    // choreUnits: []
});

schema.methods.generateHash = function(password) {
    return this.password = bcrypt.hashSync(password, 8);
};

schema.methods.compareHash = function(password) {
    return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('User', schema);

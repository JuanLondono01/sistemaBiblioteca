const mongoose = require('mongoose')

const adminSchema = mongoose.Schema({
    user: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Admin = mongoose.model('admin', adminSchema);

module.exports = Admin;


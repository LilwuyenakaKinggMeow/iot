const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema(
    {
        id: {
            type: String,
            required: true,
            lowercase: true,
        },
        name: {
            type: String,
            required: true,
            lowercase: true,
        },
    },
    { timestamps: true }  
);

module.exports = mongoose.model('Location', locationSchema);

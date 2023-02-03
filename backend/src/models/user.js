const mongoose = require('mongoose');
/*
*         id: ID!
        username: String!
        email: String!
        avatar: String
        notes: [Note!]!*/
const noteSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        index: {unique: true}
    },
    email: {
        type: String,
        required: true,
        index: {unique: true}
    },
    avatar: {
        type: String,
    },
    password: {
        type: String,
        required: true,
    }
}, {
    timestamps: true
});

const User = mongoose.model('User', noteSchema);

module.exports = User;

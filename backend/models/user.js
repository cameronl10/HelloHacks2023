const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    elo:{
        type: Number,
        default: 0
    }
})

module.exports = mongoose.model("User",userSchema);
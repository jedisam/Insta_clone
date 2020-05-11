const mongoose = require('mongoose')

const users = mongoose.Schema({
    username:{
        required:true,
        type:"String"
    },
    password:{
        type:"String",
        required:true
    }
})

module.exports = mongoose.model("InstaUser",users);
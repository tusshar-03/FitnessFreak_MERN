const mongoose = require('mongoose');
const userSchema= mongoose.Schema({
    name: String, 
    phone: Number,
    email: String,
    message:String,
})
module.exports=mongoose.model("enthusiasts", userSchema);
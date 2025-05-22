const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name:String,
    email:{type:String, required:True},
    passaord:String,
});

module.export = mongoose.model("User", userSchema);



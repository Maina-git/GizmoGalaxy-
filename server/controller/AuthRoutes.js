const User = require("../models/User");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

exports.register = async (req, res) => {
    const {name, email, password} = req.body;
    const hash =await  bcrypt.hash(password, 10)
try{
const user = User.create({name, email, password:hash});
res.json({"ok":user});
}catch(err){
res.status(401).json({message:"Email aready in use"});
}
}

exports.login = async (req, res) => {
    const {email, password} = req.body;
    const user = await User.findOne({email});
    if(!user) res.status(401).json({message:"Invalid email"});
    const invalid =await bcrypt.compare({password, password:user});
    if(!invalid) return res.status(401).json({message:"Invalid password"})

const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
  res.json({ status: "ok", token });
    }





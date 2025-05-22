const bcrypt = require("bcryptjs");
const User = require("../models/User")
const jwt = require("jsonwebtoken")

exports.register = async (req, res) => {
    const {name, email, password} = req.body;
    const hash = await bcrypt.hash(password, 10);
    try{
        const user = await User.create({name, email, password:hash});
   res.json({"ok":user}) 
    }catch(err){
        res.status(500).json({message:"Email aready exixts"});
    }
}

exports.login = async (req, res) =>{
    const {email, password}=req.body;
    const user = await User.findOne({email});
    if(!user) return res.status(401).json({message:"invalid User"});
    const valid = await bcrypt.compare(password, user.password);
    if(!valid) return res.status(500).json({message:"invalid password"});

const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
  res.json({ status: "ok", token });

}


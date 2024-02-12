const User = require("../models/userModel");
const bcrypt = require('bcrypt');


const createUser = async (req,res) =>{
    try{
        const salt = bcrypt.genSaltSync(10);
        const hashPassword = bcrypt.hashSync(req.body.password, salt);

        const newUser = {
            name:req.body.name,
            email:req.body.email,
            password:hashPassword,
        }
        
        const CreateUser = await User.create(newUser);
        res.status(200).json(CreateUser)

    } catch(err){
        console.log(err.message)
        res.status(500).json({
            message:err.message
        });
    }
}



module.exports = {
    createUser
}
const User=require('../models/user-model')
const home=async (req,res) => {
    try {
        res.status(200).send({message:"Welcome to the Poetry Project API"})
    } catch (error) {
        res.status(500).send({message:"Internal Server Error"})
    }
}
const register=async (req,res) => {
    // Registration logic here
    try {
        const{username,email,phone,password}=req.body;
        const UserExists=await User.findOne({email})

        if(UserExists){
            return res.status(400).send({message:"User already exists"})
        }
            const userCreated=await User.created({username,email,phone,password})
            res.status(201).send({message:userCreated})
    } catch (error) {
        res.status(500).send({message:"Internal Server Error"})
    }
}
module.exports={home,register}
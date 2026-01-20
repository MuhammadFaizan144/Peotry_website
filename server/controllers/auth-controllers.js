const User=require('../models/user-model')
const bcrypt=require('bcryptjs')
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
            return res.status(400).json({message:"User already exists"})
        }
            const userCreated=await User.create({
                username,
                email,
                phone,
                password
            })
            res.status(201).json({
                message:"registration successful",
                token:await userCreated.generateToken(),
                
                userId:userCreated._id.toString()
            })
    } catch (error) {
        res.status(500).send({message:"Internal Server Error"})
    }
}
const login=async (req,res) => {
    try {
        const {email,password}=req.body
        const UserExists=await User.findOne({email})
        console.log(UserExists)
        if(!UserExists){
            return res.status(400).json({message:"User does not exist"})
        }

        const user=await UserExists.comparePassword(password)
        
        if(user){
            res.status(200).json({
                message:"Login Successful",
                token:await UserExists.generateToken(),
                userId:UserExists._id.toString()
            })
        }else{
            res.status(401).json({message:"Invalid Credentials"})
        }
    } catch (error) {
        res.status(500).send({message:"Internal Server Error"})
    }
}
module.exports={home,register,login}
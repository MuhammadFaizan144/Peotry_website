const User=require('../models/user-model')
const getAllUsers=async(req,res)=>{
    try {
        const users=await User.find({},{password:0})
        console.log(users)
        if(!users||users.length===0){
            res.status(400).json({message:"No users found"})
        }
        res.status(200).json(users)
    } catch (error) {
        next(error)
    }
}
module.exports=getAllUsers
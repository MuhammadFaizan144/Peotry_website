const Contact=require('../models/contact-model')
const User=require('../models/user-model')
const Service=require('../models/service-model')
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
const getAllContacts=async(req,res) => {
    try {
        const contacts=await Contact.find()
        console.log(contacts)
        
        if(!contacts||contacts.length===0){
            res.status(400).json({message:"No contact found"})
        }
        res.status(200).json(contacts)

    } catch (error) {
        next(error)
    }
}
const getAllService=async (req,res) => {
    try {
        const services=await Service.find()
        if(!services||services.length===0){
            res.status(400).json({message:"No service found"})
        }
        res.status(200).json(services)
    } catch (error) {
        next(error)
    }
}
module.exports={getAllUsers,getAllContacts,getAllService}
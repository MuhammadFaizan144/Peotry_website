const Contact = require('../models/contact-model')
const User = require('../models/user-model')
const Service = require('../models/service-model')
//User
const getAllUsers = async (req, res) => {
    try {
        const users = await User.find({}, { password: 0 })
        console.log(users)
        if (!users || users.length === 0) {
            res.status(400).json({ message: "No users found" })
        }
        res.status(200).json(users)
    } catch (error) {
        next(error)
    }
}

const deleteUserById = async (req, res) => {
    try {
        const id = req.params.id
        await User.deleteOne({ _id: id })
        return res.status(200).json({ message: "User deleted Successfully" })
    } catch (error) {
        next(error)
    }
}

const getUserById = async (req, res) => {
    try {
        const id = req.params.id
        const data = await User.findOne({ _id: id }, { password: 0 })
        return res.status(200).json(data)

    } catch (error) {
        next(error)
    }
}

const updateUserById=async (req,res) => {
    try {
        const id=req.params.id
        const updateUserData=req.body //to get the provided user data
        const updateData=await User.updateOne({_id:id},{$set:updateUserData})
        return res.status(200).json({updateData})
    } catch (error) {
        next(error)
    }
}
//Contact
const getAllContacts = async (req, res) => {
    try {
        const contacts = await Contact.find()
        console.log(contacts)

        if (!contacts || contacts.length === 0) {
            res.status(400).json({ message: "No contact found" })
        }
        res.status(200).json(contacts)

    } catch (error) {
        next(error)
    }
}

const deleteContactById=async (req,res) => {
    try {
        const id=req.params.id
        await Contact.deleteOne({_id:id})
        res.status(200).json({message:"Contact Message Deleted succesfully"})
    } catch (error) {
        next(error)
    }
}
const UpdateContactById=async (req,res) => {
    try {
        const id=req.params.id
        const updateContactData=req.body
        const updateContact=await Contact.updateOne({_id:id},{$set:updateContactData})
        return res.status(200).json({updateContact})
    } catch (error) {
        next(error)
    }
}
// Services
const getAllService = async (req, res) => {
    try {
        const services = await Service.find()
        if (!services || services.length === 0) {
            res.status(400).json({ message: "No service found" })
        }
        res.status(200).json(services)
    } catch (error) {
        next(error)
    }
}

const deleteServiceById=async (req,res) => {
    try {
        const id=req.params.id
        await Service.deleteOne({_id:id})
        res.status(200).json({message:"Services (poems and peotry) deleted successfully"})
    } catch (error) {
        next(error)
    }
}
const updateServiceById=async (req,res) => {
    try {
        const id=req.params.id
        const updateServiceData=req.body
        const updateService=await Service.updateOne({_id:id},{$set:updateServiceData})
        return res.status(200).json({updateService})
    } catch (error) {
        next(error)
    }
}
module.exports = { getAllUsers, getAllContacts, getAllService, deleteUserById, getUserById ,updateUserById,deleteContactById,deleteServiceById,UpdateContactById,updateServiceById} 
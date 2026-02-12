const Service = require('../models/service-model')
const addServices = async (req, res) => {
    try {
        const { type, writer, content } = req.body
        const createServices = await Service.create({
            type,
            writer,
            content
        })
        console.log(createServices)
        res.status(201).json({
            message: "Add successful",
            data: createServices,
        })
    } catch (error) {
        res.status(500).json({message:"Not added succesfully"})
    }
}
module.exports = { addServices }
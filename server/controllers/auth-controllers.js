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
        res.status(201).send({message:"User registered successfully"})
    } catch (error) {
        res.status(500).send({message:"Internal Server Error"})
    }
}
module.exports={home,register}
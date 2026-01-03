const mongoose = require('mongoose');
const URI=process.env.MONGODB_URI
const connectDB = async () => {
    try {
        await mongoose.connect(URI)
        console.log('Database connected successfully');
    } 
    catch (error) {
        console.error('Error connecting to the database:', error);
        process.exit(1);
    }
}
module.exports = connectDB
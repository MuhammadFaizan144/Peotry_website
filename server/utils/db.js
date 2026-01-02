const mongoose = require('mongoose');
const URI="mongodb+srv://fg7829098:faizanfk0309@cluster01.erroaal.mongodb.net/peotry_project?appName=Cluster01"
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
require("dotenv").config();
const express=require('express');
const app=express();
const router=require('./router/auth-router');
const connectDB=require('./utils/db');
const errorMiddlware = require("./middleware/error-middleware");


app.use(express.json());

app.use('/api/auth',router)

app.use(errorMiddlware)

const PORT=3000;

connectDB().then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server is running on port http://localhost:${PORT}`);
    });
})
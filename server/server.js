require("dotenv").config();
const express=require('express');
const app=express();
const authRoute=require('./router/auth-router');
const contactRoute=require('./router/contact-router')
const serviceRoute=require('./router/service-router')
const adminRoute=require('./router/admin-router')
const connectDB=require('./utils/db');
const errorMiddlware = require("./middleware/error-middleware");
const cors=require('cors')


app.use(express.json());
app.use(express.urlencoded({extended:true}));

var corsOptions={
    origin:"http://localhost:5173",
    method:"Get, POST, PUT, DELETE, PATCH, HEAD",
    credentials:true,
};

app.use(cors(corsOptions));

app.use('/api/auth',authRoute)
app.use('/api/form',contactRoute)
app.use("/api/data",serviceRoute)
app.use('/api/admin',adminRoute)
app.use(errorMiddlware)

const PORT=3000;

connectDB().then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server is running on port http://localhost:${PORT}`);
    });
})
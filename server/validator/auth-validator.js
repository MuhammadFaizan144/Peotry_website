
const {z}= require('zod');
const SignUpSchema=z.object({
    username:z
    .string({required_error:"Username is required"})
    .trim()
    .min(3,{message:"Username must be at least 3 characters long"})
    .max(255,{message:"Username must be less than 255 characters long"}),

    email:z
    .string({required_error:"Email is required"})
    .trim()
    .email({message:"Invalid email address"})
    .min(3,{message:"Email must be at least 3 characters long"})
    .max(255,{message:"Email must be less than 255 characters long"}),

    phone:z
    .string({required_error:"Phone is required"})
    .trim()
    .min(10,{message:"Phone must be at least 10 characters long"})
    .max(20,{message:"Phone must be less than 20 characters long"}),
    password:z
    .string({required_error:"Password is required"})
    .trim()
    .min(3,{message:"Password must be at least 3 characters long"})
    .max(1024,{message:"Password must be less than 1024 characters long"}),
})
const loginSchema=z.object({

    email:z
    .string({required_error:"Email is required"})
    .trim()
    .email({message:"Invalid email address"})
    .min(3,{message:"Email must be at least 3 characters long"})
    .max(255,{message:"Email must be less than 255 characters long"}),

    password:z
    .string({required_error:"Password is required"})
    .trim()
    .min(3,{message:"Password must be at least 3 characters long"})
    .max(1024,{message:"Password must be less than 1024 characters long"}),
})
module.exports={SignUpSchema,loginSchema};
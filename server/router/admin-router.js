const express=require('express');
const router=express.Router();
const authController=require('../controllers/auth-controllers')
const {getAllUsers,getAllContacts}=require('../controllers/admin-controllers')
router.route('/user').get(authController,getAllUsers)
router.route('/contact').get(authController,getAllContacts)
module.exports=router
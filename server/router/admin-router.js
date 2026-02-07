const express=require('express');
const router=express.Router();
const {getAllUsers,getAllContacts}=require('../controllers/admin-controllers')
router.route('/user').get(getAllUsers)
router.route('/contact').get(getAllContacts)
module.exports=router
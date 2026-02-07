const express=require('express');
const router=express.Router();
const getAllUsers=require('../controllers/admin-controllers')
router.route('/user').get(getAllUsers)
module.exports=router
const express=require('express');
const router=express.Router();
const authMiddleware=require("../middleware/auth-middleware")
const {getAllUsers,getAllContacts,getAllService}=require("../controllers/admin-controllers")
const adminMiddleware=require('../middleware/admin-middleware')
router.route('/user').get(authMiddleware,adminMiddleware,getAllUsers)
router.route('/contact').get(authMiddleware,adminMiddleware,getAllContacts)
router.route('/service').get(authMiddleware,adminMiddleware,getAllService)
module.exports=router
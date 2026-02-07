const express=require('express');
const router=express.Router();
const authMiddleware=require("../middleware/auth-middleware")
const {getAllUsers,getAllContacts,getAllService}=require("../controllers/admin-controllers")
router.route('/user').get(authMiddleware,getAllUsers)
router.route('/contact').get(authMiddleware,getAllContacts)
router.route('/service').get(authMiddleware,getAllService)
module.exports=router
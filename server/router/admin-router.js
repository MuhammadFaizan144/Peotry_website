const express=require('express');
const router=express.Router();
const authMiddleware=require("../middleware/auth-middleware")
const {getAllUsers,getAllContacts,getAllService,deleteUserById}=require("../controllers/admin-controllers")
const adminMiddleware=require('../middleware/admin-middleware')
router.route('/user').get(authMiddleware,adminMiddleware,getAllUsers)
router.route('/user/delete/:id').delete(authMiddleware,adminMiddleware,deleteUserById)
router.route('/contact').get(authMiddleware,adminMiddleware,getAllContacts)
router.route('/service').get(authMiddleware,adminMiddleware,getAllService)
module.exports=router 
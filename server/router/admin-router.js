const express=require('express');
const router=express.Router();
const authMiddleware=require("../middleware/auth-middleware")
const {getAllUsers,getAllContacts,getAllService,deleteUserById,getUserById,updateUserById,deleteContactById,deleteServiceById,UpdateContactById,updateServiceById,getServiceById,getContactById}=require("../controllers/admin-controllers")
const adminMiddleware=require('../middleware/admin-middleware')
const {addServices}=require('../controllers/add-controllers')
// User
router.route('/user').get(authMiddleware,adminMiddleware,getAllUsers)
router.route('/user/:id').get(authMiddleware,adminMiddleware,getUserById)
router.route('/user/update/:id').patch(authMiddleware,adminMiddleware,updateUserById)
router.route('/user/delete/:id').delete(authMiddleware,adminMiddleware,deleteUserById)
// Contact
router.route('/contact').get(authMiddleware,adminMiddleware,getAllContacts)
router.route('/contact/:id').get(authMiddleware,adminMiddleware,getContactById)
router.route('/contact/update/:id').patch(authMiddleware,adminMiddleware,UpdateContactById)
router.route('/contact/delete/:id').delete(authMiddleware,adminMiddleware,deleteContactById)
// Services
router.route('/service').get(authMiddleware,adminMiddleware,getAllService)
router.route('/service/:id').get(authMiddleware,adminMiddleware,getServiceById)
router.route('/service/update/:id').patch(authMiddleware,adminMiddleware,updateServiceById)
router.route('/service/delete/:id').delete(authMiddleware,adminMiddleware,deleteServiceById)
//Add Services
router.route('/service/add').post(authMiddleware,addServices)
module.exports=router 
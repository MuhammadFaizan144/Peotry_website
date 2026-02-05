const express=require("express")
const router=express.Router()
const services=require('../controllers/service-controllers')
router.route('/poem').get(services);


module.exports=router
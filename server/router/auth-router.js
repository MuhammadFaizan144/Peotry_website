const express = require('express');
const router = express.Router();
const SignValidation=require('../validator/auth-validator');
const validate=require('../middleware/validate-middleware');
const authController = require('../controllers/auth-controllers');
router.route('/').get(authController.home)
router.route('/register').post(validate(SignValidation.SignUpSchema),authController.register)
router.route('/login').post(validate(SignValidation.loginSchema),authController.login)
module.exports = router;
const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');
const authController = require('../controllers/authController');

router.get('/', function (req, res, next) {
	res.render('index', { title: 'Members Only | Home' });
});

router.get('/signup', userController.signup_get);
router.post('/signup', userController.signup_post);

router.get(
	'/member/request',
	authController.checkAuthenticated,
	userController.upgrade_get
);
router.post(
	'/member/request',
	authController.checkAuthenticated,
	userController.upgrade_post
);

router.get('/login', authController.login_get);
router.post('/login', authController.login_post);

router.get('/logout', authController.logout_get);

module.exports = router;

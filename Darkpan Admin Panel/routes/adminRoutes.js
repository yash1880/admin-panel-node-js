const express = require('express');
const router = express.Router();
const adminController = require('../controller/adminController');

// Dashboard route
router.get('/dashboard', adminController.getDashboard);

// Other admin pages
router.get('/button', adminController.getPage('button'));
router.get('/typography', adminController.getPage('typography'));
router.get('/element', adminController.getPage('element'));
router.get('/widget', adminController.getPage('widget'));
router.get('/form', adminController.getPage('form'));
router.get('/table', adminController.getPage('table'));
router.get('/chart', adminController.getPage('chart'));
router.get('/blank', adminController.getPage('blank'));
router.get('/signin', adminController.getPage('signin'));
router.get('/signup', adminController.getPage('signup'));
router.get('/404', adminController.getPage('404'));

module.exports = router;

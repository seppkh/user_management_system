const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
// const middleware = require('../middleware/userMiddleware')


router.get('/', userController.viewall);
router.post('/', userController.find);

router.get('/adduser', userController.form);
router.post('/adduser', userController.createuser);
router.get('/viewuser/:id', userController.viewuser);
router.get('/edituser/:id', userController.editform);
router.post('/edituser/:id', userController.updateuser);

router.get('/deleteuser/:id', userController.deleteuser);


module.exports = router;
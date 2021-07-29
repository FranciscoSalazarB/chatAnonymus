var express = require('express');
var router = express.Router();
var userController = require('../User/infraestructure/Usercontroller');

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

/*POST*/ 
router.post('/register', userController.register);
router.post('/login', userController.login);

module.exports = router;

const router = require('express').Router();
const Collaction = require('../../Collaction/user.collaction');

router.route('/user/singup').post(Collaction.createUserCollaction);
router.route('/user/login').post(Collaction.loginUserCollaction);

module.exports = router;

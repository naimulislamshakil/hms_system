const router = require('express').Router();
const Collaction = require('../../Collaction/user.collaction');
const { verifyToken } = require('../../Meddleware/verifyToken');

router.route('/user/singup').post(Collaction.createUserCollaction);
router.route('/user/login').post(Collaction.loginUserCollaction);
router
	.route('/user/persist')
	.get(verifyToken, Collaction.userPersistCollaction);

module.exports = router;

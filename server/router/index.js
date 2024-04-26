const Router = require('express').Router;
const userController = require('../controllers/use-controller');
const managerController = require('../controllers/manager-controller');
const router = new Router();
const {body} = require('express-validator');
const authMiddleware = require('../middlewares/auth-middleware');

router.post('/registration',
    body('email').isEmail(),
    body('password').isLength({min:3, max:32}),
    userController.registration);
router.post('/login', userController.login);
router.post('/logout', userController.logout);
router.post('/edit', userController.edit);
router.get('/activate/:link', userController.activate);
router.get('/refresh', userController.refresh);
router.get('/users', authMiddleware, userController.getUsers);
router.get('/user/:id', authMiddleware, userController.getOneUser);
router.patch('/user/:id', authMiddleware, userController.updateUser);
router.post('/manager/create', managerController.createManager);
router.get('/manager', managerController.managers);
router.patch('/manager/:id', managerController.updateManager);

module.exports = router

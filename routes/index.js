const express = require('express');
const router = express.Router();


const homeControllers = require('../controllers/homeControllers');
const viewadminControllers = require('../controllers/viewadminControllers');

router.get('/',homeControllers.home);
router.get('/login',homeControllers.login);
router.get('/register',homeControllers.register);
router.post('/admin',homeControllers.adminlog);
router.get('/admin/home',homeControllers.adminhome);
router.post('/admin/register',homeControllers.adminregister);
router.get('/admin/employees',homeControllers.employees);
router.get('/delete/',homeControllers.delete);
router.get('/admin/attendence',homeControllers.atd);
router.post('/admin/attendence',homeControllers.atdp);
router.get('/admin/transactions',homeControllers.transactions);
router.post('/admin/transactions',homeControllers.transactionsp);
router.get('/admin/history',homeControllers.history);
router.get('/admin/view',viewadminControllers.view);
router.get('/admin/view/home',viewadminControllers.home);
router.get('/admin/view/salary',viewadminControllers.salary);
router.get('/admin/view/payment',viewadminControllers.payment);
router.get('/admin/view/attendence',viewadminControllers.attendence);





console.log('router!!');
module.exports = router;
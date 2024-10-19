const express = require('express');
const employeeController = require('../Controllers/employeeController');

const router = express.Router();

router.post('/addemp', employeeController.addEmployee);
router.get('/employees', employeeController.getEmployees);
router.delete('/deleteemp/:id', employeeController.deleteEmployee);
router.put('/update/:id', employeeController.updateEmployee);

module.exports = router;


// const express = require('express')
// const employeeController=require('../Controllers/employeeController')

// const router = express.Router()

// router.post('/addemp',employeeController.addEmployee)
// router.get('/employees',employeeController.getEmployees)
// router.delete('/deleteemp/:id',employeeController.deleteEmployee)
// router.put('/update/:id',employeeController.updateEmployee)


// module.exports=router


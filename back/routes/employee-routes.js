const { check } = require('express-validator');
const { getEmployees, addEmployees, assignTask,assignReport } = require('../controllers/employee-controller');

express = require('express');
const router = express.Router();

router.get("/get-employee",getEmployees);
router.post("/add-employee",
[check("subordinates","my message").exists(),
check("tasks","my message").exists(),
check("managerId","my message").exists(),
check("name","my message").exists(),
check("lastName","my message").exists(),
check("position","my message").exists(),
],addEmployees)
router.post("/assign-task",assignTask)
router.post("/assign-report",assignReport)

module.exports = router;
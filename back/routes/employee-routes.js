const { getEmployees, addEmployees, assignTask,assignReport } = require('../controllers/employee-controller');

express = require('express');
const router = express.Router();

router.get("/get-employee",getEmployees);
router.post("/add-employee",addEmployees)
router.post("/assign-task",assignTask)
router.post("/assign-report",assignReport)

module.exports = router;
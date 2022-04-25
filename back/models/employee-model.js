const mongoose = require('mongoose');

const employeeSchema = mongoose.Schema({
    name:String,
    lastName:String,
    position:String,
    image:String,
    manager:String,
    managerId:String,
    tasks:[],
    subordinates:[]
})

const Employee = mongoose.model("Employee",employeeSchema);
module.exports = Employee;


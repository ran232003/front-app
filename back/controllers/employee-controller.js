const { validationResult } = require('express-validator');
const Employee = require("../models/employee-model");
const getEmployees = async(req,res,next)=>{
   
    const employees = await Employee.find();
    res.json({msg:"ok",employees:employees})

}
const addEmployees = async(req,res,next)=>{
    let requestBody = req.body;
    const errors = validationResult(req);
    if(!errors.isEmpty()){
       
        console.log("error",errors)
        return res.json({msg:"error"})
    }
    
    const newEmployee = new Employee({
        name:requestBody.name,
        lastName:requestBody.lastName,
        position:requestBody.position,
        manager:requestBody.manager,
        managerId:requestBody.managerId,
        image:requestBody.image,
        tasks:requestBody.tasks,
        subordinates:requestBody.subordinates
    })
    await newEmployee.save();
    res.json({msg:"ok"})
}
const assignTask = async (req,res,next)=>{
    const{id,endDate,startDate,task} = req.body;
    const emp = await Employee.findById(id)
    emp.tasks.push({task:task,startDate:startDate,endDate:endDate})
    await emp.save();
    res.json({msg:"ok"})

}
const assignReport = async (req,res,next)=>{
    const{id,startDate,report} = req.body;
    const emp = await Employee.findById(id)
    emp.tasks.push({task:report,startDate:startDate})
    await emp.save();
    res.json({msg:"ok"})

}
module.exports = {
    getEmployees:getEmployees,
    addEmployees:addEmployees,
    assignTask:assignTask,
    assignReport:assignReport
}
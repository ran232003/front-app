import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import EmployeeImage from "../components/EmploeeImage";
import EmployeeInfo from "../components/EmployeeInfo";
import EmploeeTasks from "../components/EmployeeTasks";
import Headline from "../components/Headline";
import { employeeActions } from "../store/employeeSlice";
import {employeesArrayTasks} from "../dummyEmployeesTaks"
import "./EmployeePage.css"
import SubordinatesList from "../components/SubordinatesList";
const EmployeePage = ()=>{
    const dispatch = useDispatch();
    let { id } = useParams();
    const employees = useSelector((state)=>{
       return state.employee;
    })
    const emp = employees.employees.find((emp)=>{return emp.id == id})
    //const emp = employeesArrayTasks.find((emp)=>{return emp.id == id})
    console.log(emp,id)
    if(typeof emp === "undefined"){
        return (
            <div>
                
                <Headline
               text = "Employee not exist"
               />
             
            </div>)
    }
    else{
        return(
            <div className = "main">
                <div className = "personal-info">
                <EmployeeImage
                imageUrl = {emp.image}
                />
                <EmployeeInfo
                name = {emp.name}
                lastName = {emp.lastName}
                position = {emp.position}
                managerId = {emp.managerId}
                manager = {emp.manager}
                />
                

               </div>
               <div>
                  <b> Tasks:</b>
               </div>
               <div>
                <EmploeeTasks
                tasks = {emp.tasks}
                />
                </div>
                {typeof emp.subordinates === "undefined"?null:
                <div>
                     <div style = {{marginTop:"10px"}}>
                   <b> My Subordinates</b>
                </div>
                <div>
                <SubordinatesList
                subList = {emp.subordinates}
                />
                </div>
                </div>
                }
               
            </div>
        )
    }
   
}

export default EmployeePage
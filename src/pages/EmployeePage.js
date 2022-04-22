import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import EmployeeImage from "../components/EmploeeImage";
import EmployeeInfo from "../components/EmployeeInfo";
import Headline from "../components/Headline";
import { employeeActions } from "../store/employeeSlice";
import "./EmployeePage.css"
const EmployeePage = ()=>{
    const dispatch = useDispatch();
    let { id } = useParams();
    const employees = useSelector((state)=>{
       return state.employee;
    })
    const emp = employees.employees.find((emp)=>{return emp.id == id})
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
            <div>
                <div className = "personal-info">
                <EmployeeImage
                imageUrl = {emp.image}
                />
                <EmployeeInfo
                name = {emp.name}
                lastName = {emp.lastName}
                position = {emp.position}
                />

               </div>
            </div>
        )
    }
   
}

export default EmployeePage
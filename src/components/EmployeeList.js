import React from "react";
import { useSelector } from "react-redux";
import Employee from "./Employee";

const EmployeeList = ()=>{
  
    const employeeArray = useSelector((state)=>{
        return state.employee;
    }) 
    return(
        <div>
            {employeeArray.employees.map((emp)=>{
                return(
                    <Employee
                    key = {emp.id}
                    id = {emp.id}
                    name = {emp.name}
                    lastName = {emp.lastName}
                    position = {emp.position}
                    />
                )
            })}
        </div>
    )
}
export default EmployeeList
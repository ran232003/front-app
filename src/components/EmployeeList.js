import React from "react";
import Employee from "./Employee";

const EmployeeList = ()=>{
    const employees = [{
        name:"ran",
        lastName:"far",
        position:"software developer"
    },{
        name:"ran",
        lastName:"far",
        position:"software developer"
    }]
    return(
        <div>
            {employees.map((emp)=>{
                return(
                    <Employee
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
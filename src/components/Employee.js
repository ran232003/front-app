import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./Employee.css"
const Employee = (props)=>{
    let navigate = useNavigate();
    const handleClick = ()=>{
        console.log("click");
        navigate(`/employees/employee-page/${id}`)
    }
    const {name,lastName,position,id} = props;
    const fullName = name +" " + lastName
    return (
        <div className = "emp">
            <div className = "name">{fullName}</div>
            <div className = "pos">{position}</div>
            <div onClick = {handleClick} className = "view">View</div>
        </div>
    )
}
export default Employee;
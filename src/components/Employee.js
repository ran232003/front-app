import React from 'react';
import "./Employee.css"
const Employee = (props)=>{
    const {name,lastName,position} = props;
    const fullName = name +" " + lastName
    return (
        <div className = "emp">
            <div className = "name">{fullName}</div>
            <div className = "pos">{position}</div>
            <div className = "view">View</div>
        </div>
    )
}
export default Employee;
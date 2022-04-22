import React from "react";
import "./EmployeeInfo.css"
const EmployeeInfo = (props)=>{
    const {name,lastName,position} = props;
    const fullName = name + " " + lastName
    return(
        <div className = "emp-info">
            <div className = "info">
                Name : {fullName}
            </div>
            <div className = "info">
                Position : {position}
            </div>
            <br/>
            <div className = "info2">
                <span>
                Manager : {position}
                </span> &nbsp;&nbsp;&nbsp;
               <span>
                   test
               </span>
            </div>
        </div>
    )
}
export default EmployeeInfo
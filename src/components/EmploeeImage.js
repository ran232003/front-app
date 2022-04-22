import React from "react";
import "./EmployeeImage.css"
const EmployeeImage = (props)=>{
    const {imageUrl} = props;
    return(
        <div className = "emp-image">
          <img className = "image" src = {imageUrl}/>  
        </div>
    )
}
export default EmployeeImage
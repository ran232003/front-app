import React from "react";
import EmployeeList from "../components/EmployeeList";
import Headline from "../components/Headline";

const Employess = ()=>{

    return(
        <div className = "back">
          <Headline
          text = "Company Employess"
          />
          <EmployeeList/>  
        </div>
    )
}

export default Employess;
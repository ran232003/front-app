import React from "react";
import { useSelector } from "react-redux";
import "./TaskItem.css"
const TaskItem = (props)=>{
    const{text,date,endDate} = props;
 
    return(
        <div className = "tasks">
            <div className = "text">
            {text}
            </div>
            <div className = "date">
            {date}
            </div>
            <div className = "date">
            {endDate}
            </div>
        </div>
    )
}

export default TaskItem;
import React from "react";
import "./TaskItem.css"
const TaskItem = (props)=>{
    const{text,date} = props;
    return(
        <div className = "tasks">
            <div className = "text">
            {text}
            </div>
            <div className = "date">
            {date}
            </div>
        </div>
    )
}

export default TaskItem;
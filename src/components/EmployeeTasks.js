import React, { useEffect } from "react";
import TaskItem from "./TaskItem";

const EmploeeTasks = (props)=>{
    let {tasks} = props;
    
    if(tasks.length == 0){
    return(
        <div>
            No Tasks!
        </div>
    )
}else{
    return(
        <div>
            {tasks.map((task)=>{
                return(
                    <TaskItem
                    text = {task.text}
                    date = {task.date}
                    />
                )
            })}
        </div>
    )
}
}

export default EmploeeTasks;
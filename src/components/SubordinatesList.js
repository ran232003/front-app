import React from "react";
import SubItem from "./SubItem";

const SubordinatesList = (props)=>{
    const {subList} = props;
    return(
        <div>
            {subList.map((subItem)=>{
                return(
                    <SubItem
                    name = {subItem.name}
                    id = {subItem.id}
                    key = {subItem.id}
                    position = {subItem.position}
                    />
                )
            })}
        </div>
    )
}

export default SubordinatesList
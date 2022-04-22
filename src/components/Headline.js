import React from "react";
import "./Headline.css"
const Headline = (props)=>{
    return(
        <div className = "emp-head">
            <h1>{props.text}</h1>
        </div>
    )
}

export default Headline;
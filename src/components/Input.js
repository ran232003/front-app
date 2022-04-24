import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

const Input = (props)=>{
    const[input,setInput] = useState();
    const {lable,type} = props;
    const handleInput = (event)=>{
        const val = event.target.value
        props.handleInput(val);
    }
    return(
        <div>
 <Form>
     
        
        <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>{lable}</Form.Label>
    <Form.Control type={type} onChange = {handleInput} />
    
  </Form.Group>
       
  
  {/* <Button variant="primary" type="submit">
    Submit
  </Button> */}
</Form>
        </div>
    )
}
export default Input;
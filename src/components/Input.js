import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { employeeActions } from "../store/employeeSlice";

const Input = (props)=>{
    const [valid,setValid] = useState(false)
    const[input,setInput] = useState();
    const {lable,type} = props;
    const dispatch = useDispatch();
    const handleInput = (event)=>{
        const val = event.target.value
        props.handleInput(val);
        if(val.length == 0){
            setValid(true)
            dispatch(employeeActions.setinputValid(true))
        }else{
            setValid(false)
            dispatch(employeeActions.setinputValid(false))
        }
    }
    return(
        <div>
 <Form>    
    <Form.Group  className="mb-3" controlId="formBasicEmail">
    <Form.Label>{lable}</Form.Label>
    <Form.Control isInvalid = {valid} type={type} onChange = {handleInput} />
    <Form.Control.Feedback type="invalid">
    *Required Field.
          </Form.Control.Feedback>
  </Form.Group>
       
  
  {/* <Button variant="primary" type="submit">
    Submit
  </Button> */}
</Form>
        </div>
    )
}
export default Input;
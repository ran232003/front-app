import React, { useEffect, useState } from "react"
import { Button, Form, Modal } from "react-bootstrap";
import Input from "./Input";

const PopupModal = (props)=>{
    const{toShow,numOfInputs,modalTitle,test} = props;
    
  console.log("in modal")
    return(
        <div>
        
         <Modal.Header closeButton>
          <Modal.Title>{modalTitle}</Modal.Title>
        </Modal.Header>
        
        
        
        </div>
    )
}
export default PopupModal;
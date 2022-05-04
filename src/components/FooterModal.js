import React from "react";
import { Button, Modal } from "react-bootstrap";
import { useSelector } from "react-redux";

const FooterModal = (props)=>{
    //const{handleClose,SubmitReport} = props;
    const valid = useSelector((state)=>{
        return state.employee.inputValid;
    })
    const SubmitReport = ()=>{
        props.SubmitReport();
    }
    const handleClose = ()=>{
        props.handleClose();
    }
    return(
    <div>
    <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button disabled={valid} variant="primary" onClick={SubmitReport}>Save</Button>
        </Modal.Footer>
        </div>
    )
}

export default FooterModal;
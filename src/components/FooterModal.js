import React from "react";
import { Button, Modal } from "react-bootstrap";

const FooterModal = (props)=>{
    const{handleClose,SubmitReport} = props;
    return(
    <div>
    <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={SubmitReport}>Save</Button>
        </Modal.Footer>
        </div>
    )
}

export default FooterModal;
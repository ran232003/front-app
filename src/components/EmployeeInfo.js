import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import "./EmployeeInfo.css"
import FooterModal from "./FooterModal";
import Input from "./Input";
import MyModal from "./MyModal";
import PopupModal from "./PopupModal";
const EmployeeInfo = (props)=>{
    const {name,lastName,position,manager,managerId} = props;
    const[report, setReport] = useState();
    const fullName = name + " " + lastName;
    const[show,setShow] = useState(false)
    
    const handleModal = ()=>{
        setShow(true)
        console.log("to show Modal")
    }
    const handleInput = (rep)=>{
        console.log(rep);
        setReport(rep);
    }
    const handleModalClose = ()=>{
        console.log("close")
        setShow(false)
    }
    const SubmitReport = ()=>{
        console.log("sub",report)
        handleModalClose();
    }
    console.log("show",show);
    return(
        <div className = "emp-info">
            <div className = "info">
                Name : {fullName}
            </div>
            <div className = "info">
                Position : {position}
            </div>
            <br/>
            <div className = "info2">
                <span>
                Manager : {manager}
                </span> &nbsp;&nbsp;&nbsp;
               <span>
                   <Button onClick = {handleModal} size="sm">Report</Button>
               </span>
            </div>
            {/* <MyModal
            toShow = {show}
            handleModalClose = {handleModalClose}
            numOfInputs = {[{label:"Report",type:"text"}]}
            modalTitle = "Report To Manager"
            /> */}
            <Modal
             show={show}
             onHide={handleModalClose}
             backdrop="static"
             keyboard={false}
             >
                <PopupModal
                modalTitle = "Report To Manager"
                />
                <Modal.Body>
                    <Input
                    handleInput = {handleInput}
                    lable = "Report"
                    type = "text"
                    
                    />
                </Modal.Body>
                <FooterModal
                handleClose = {handleModalClose}
                SubmitReport = {SubmitReport}
                />
            </Modal>
        </div>
    )
}
export default EmployeeInfo
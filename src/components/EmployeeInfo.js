import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { assignReport } from "../api/api";
import { employeeActions } from "../store/employeeSlice";
import DatePicker from "./DatePicker";
import "./EmployeeInfo.css"
import FooterModal from "./FooterModal";
import Input from "./Input";
import MyModal from "./MyModal";
import PopupModal from "./PopupModal";
const EmployeeInfo = (props)=>{
    const {name,lastName,position,manager,managerId} = props;
    const employeeState = useSelector((state)=>{
        return state.employee;
    })
    const[report, setReport] = useState();
    const fullName = name + " " + lastName;
    const[show,setShow] = useState(false)
    const[dateToDb, setDateToDb] = useState(null);
    const dispatch = useDispatch();
const handleDate = (newDate)=>{
    setDateToDb(newDate)
}
    
    const handleModal = ()=>{
        setShow(true)
    }
    const handleInput = (rep)=>{
        setReport(rep);
    }
    const handleModalClose = ()=>{
        setShow(false)
    }
    const SubmitReport = ()=>{
        handleModalClose();
        assignReport(managerId,dateToDb,report)
        dispatch(employeeActions.assignReport({id:managerId,startDate:dateToDb,task:report}))
        //window.location.reload(false);
    }
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
                    <DatePicker
        handleDate = {handleDate}
        lable = "Choose Date"
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
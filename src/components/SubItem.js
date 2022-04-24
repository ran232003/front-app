import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import FooterModal from "./FooterModal";
import Input from "./Input";
import PopupModal from "./PopupModal";
import "./SubItem.css"
import {months} from "./Months"
import {
    DayPickerRangeController,
    DayPickerSingleDateController
  } from "react-dates";
import moment from 'moment'
import DatePicker from "./DatePicker";
const SubItem = (props)=>{
const {position,id,name} = props;
const[show,setShow] = useState(false)
const[task, setTask] = useState();
const[dateToDb, setDateToDb] = useState(null);

const handleDate = (newDate)=>{
    setDateToDb(newDate)
}
const handleModal = ()=>{
    setShow(true)
}
const handleChange = ()=>{
}
const handleInput = (rep)=>{
    setTask(rep);
}
const handleModalClose = ()=>{
    setShow(false)
}
const SubmitReport = ()=>{
    handleModalClose();
}
const setState = ()=>{
}

    return(
        <div className = "tasks">
            <div className = "name">
            {name}
            </div>
            <div className = "pos">
                {position}
            </div>
            <div className = "btn">
                <Button  size = "sm" onClick = {handleModal}>Assign Task</Button>
            </div>
            <Modal
             show={show}
             onHide={handleModalClose}
             backdrop="static"
             keyboard={false}
             >
                <PopupModal
                modalTitle = "Assign Task"
                />
                <Modal.Body>
                    <Input
                    handleInput = {handleInput}
                    lable = "Task"
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

export default SubItem;
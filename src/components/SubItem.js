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
import { assignTask } from "../api/api";
import { useDispatch, useSelector } from "react-redux";
import { employeeActions } from "../store/employeeSlice";
const SubItem = (props)=>{
const {position,id,name} = props;
const[show,setShow] = useState(false)
const[task, setTask] = useState();
const[dateToDb, setDateToDb] = useState(null);
const[dateToDb2, setDateToDb2] = useState(null);
const handleDate = (newDate)=>{
    setDateToDb(newDate)
}
const emp = useSelector((state)=>{
    return state.employee;
})
const dispatch = useDispatch();

const handleDate2 = (newDate)=>{
    setDateToDb2(newDate)
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
const SubmitReport = async()=>{
    handleModalClose();
   await assignTask(id,dateToDb,dateToDb2,task)
   dispatch(employeeActions.assignTask({id:id,startDate:dateToDb,endDate:dateToDb2,task:task}))
   //window.location.reload(false);
}
useEffect(()=>{
    console.log("effect",emp);
},[show])
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
        lable = "Start Date"
        />
        <DatePicker
        handleDate = {handleDate2}
        lable = "End Date"
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
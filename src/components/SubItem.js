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
const SubItem = (props)=>{
const {position,id,name} = props;
console.log(position,id,name)
const[show,setShow] = useState(false)
const[task, setTask] = useState();
const[dateToDb, setDateToDb] = useState(null);
const[dateChange,setDateChange] = useState(moment())
const [dateObject,setDate] = useState({
    startDate: moment(),
    endDate: moment(),
    focusedInput: null,
    focused: null,
    date: moment()
})
const onDateChange = (date1) => {
    // console.log("inside set",date1)
    // setDate(()=>{
    //     console.log("inside",date1)
    //     return {...dateObject,date:date1,endDate:date1,startDate:date1}
    // });
    setDateChange(date1);
    let myDate =  date1.toDate();
    myDate = myDate.getFullYear() + "-" +months[myDate.getMonth()] + "-" + myDate.getDate();
    setDateToDb(myDate);
  };
console.log("check",dateToDb);
const  onFocusChange = () => {
    // Force the focused states to always be truthy so that date is always selectable
    setDate(()=>{
        return {...dateObject,focused:true}
    });
  };

 const focusedInput = focusedInput => {
    console.log(`focusedInput`, focusedInput);
    setDate({ focusedInput });
    setDate(()=>{
        return {...dateObject,focusedInput:focusedInput}
    });
  };
const handleModal = ()=>{
    setShow(true)
    console.log("to show Modal")
}
const handleChange = ()=>{
    console.log("change");
}
const handleInput = (rep)=>{
    console.log(rep);
    setTask(rep);
}
const handleModalClose = ()=>{
    console.log("close")
    setShow(false)
}
const SubmitReport = ()=>{
    console.log("sub",task)
    handleModalClose();
}
const setState = ()=>{
    console.log("set")
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
                    <DayPickerSingleDateController
          onDateChange={onDateChange}
          onFocusChange={onFocusChange}
          focused={dateObject.focused}
          date={dateChange}
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
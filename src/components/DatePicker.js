import moment from "moment";
import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { DayPickerSingleDateController } from "react-dates";
import { months } from "./Months";

const DatePicker = (props)=>{
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
        props.handleDate(myDate)
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
    return(
        <div>
            <Form.Label>{props.lable}</Form.Label>
 <DayPickerSingleDateController
          onDateChange={onDateChange}
          onFocusChange={onFocusChange}
          focused={dateObject.focused}
          date={dateChange}
        />
        </div>
    )
}

export default DatePicker
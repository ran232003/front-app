import { createSlice } from "@reduxjs/toolkit";

const employeeSlice = createSlice({
    name:"employee",
    initialState:{employees:[]},
    reducers:{
        setEmployees(state,action){
            state.employees = action.payload
        },
        assignTask(state,action){
            console.log(action.payload);
            const {id,task,endDate,startDate} = action.payload;
            state.employees.map((emp)=>{
                if(emp._id === id){
                    console.log("inside if");
                    emp.tasks.push({task:task,startDate:startDate,endDate:endDate})
                }
            })
            console.log(state);
        },
        assignReport(state,action){
            console.log(action.payload);
            const {id,task,startDate} = action.payload;
            state.employees.map((emp)=>{
                console.log()
                if(emp._id === id){
                    emp.tasks.push({task:task,startDate:startDate})
                }
            })
        }
    
    }
})

export const employeeActions = employeeSlice.actions;
export default employeeSlice; 
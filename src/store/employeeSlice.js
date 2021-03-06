import { createSlice } from "@reduxjs/toolkit";

const employeeSlice = createSlice({
    name:"employee",
    initialState:{employees:[],inputValid:true},
    reducers:{
        setEmployees(state,action){
            state.employees = action.payload
        },
        assignTask(state,action){
            const {id,task,endDate,startDate} = action.payload;
            state.employees.map((emp)=>{
                if(emp._id === id){
                    
                    emp.tasks.push({task:task,startDate:startDate,endDate:endDate})
                }
            })
        },
        assignReport(state,action){
            const {id,task,startDate} = action.payload;
            state.employees.map((emp)=>{
                if(emp._id === id){
                    emp.tasks.push({task:task,startDate:startDate})
                }
            })
        },
        setinputValid(state,action){
            state.inputValid = action.payload
        }
    
    }
})

export const employeeActions = employeeSlice.actions;
export default employeeSlice; 
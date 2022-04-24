import { createSlice } from "@reduxjs/toolkit";

const employeeSlice = createSlice({
    name:"employee",
    initialState:{employees:[],employeesTasks:[]},
    reducers:{
        setEmployees(state,action){
            state.employees = action.payload
        }
    
    }
})

export const employeeActions = employeeSlice.actions;
export default employeeSlice; 
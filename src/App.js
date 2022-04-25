import logo from './logo.svg';
import './App.css';
import NavigationBar from './components/NavigationBar';
import { Route, Routes } from 'react-router-dom';
import Employess from './pages/Employess';
import EmployeePage from './pages/EmployeePage';
import { useDispatch, useSelector } from 'react-redux';
import { employeeActions } from './store/employeeSlice';
import {employeesArray} from "./dummyEmployees"
import {employeesArrayTasks} from "./dummyEmployeesTaks"
import { getEmployees } from './api/api';
import { useEffect } from 'react';
import store from './store';

function App() {
  const dispatch = useDispatch();
  const emp = useSelector(state=>state.employee.employees);
  console.log("emp",emp)
  //  store.subscribe();
  const getEmployeesFromDB = async()=>{
    const data = await getEmployees();
    console.log(data);
    dispatch(employeeActions.setEmployees(data.employees))
  }
  useEffect(()=>{
    getEmployeesFromDB();
  },[])
  //dispatch(employeeActions.setEmployees(employeesArrayTasks))
  console.log("check");
  return (
    <div className = "back">
      <NavigationBar/>
      <Routes>
      <Route exact  path = "/employees" element = {<Employess/>}>

      </Route>
      <Route exact  path = "/employees/employee-page/:id" element = {<EmployeePage/>}>

      </Route>
      </Routes>
    </div>
  );
}

export default App;

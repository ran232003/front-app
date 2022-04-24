import logo from './logo.svg';
import './App.css';
import NavigationBar from './components/NavigationBar';
import { Route, Routes } from 'react-router-dom';
import Employess from './pages/Employess';
import EmployeePage from './pages/EmployeePage';
import { useDispatch } from 'react-redux';
import { employeeActions } from './store/employeeSlice';
import {employeesArray} from "./dummyEmployees"
import {employeesArrayTasks} from "./dummyEmployeesTaks"

function App() {
  const dispatch = useDispatch();

  dispatch(employeeActions.setEmployees(employeesArrayTasks))
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

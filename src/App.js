import logo from './logo.svg';
import './App.css';
import NavigationBar from './components/NavigationBar';
import { Route, Routes } from 'react-router-dom';
import Employess from './pages/Employess';

function App() {
  return (
    <div className = "back">
      <NavigationBar/>
      <Routes>
      <Route exact  path = "/employees" element = {<Employess/>}>

      </Route>
      </Routes>
    </div>
  );
}

export default App;

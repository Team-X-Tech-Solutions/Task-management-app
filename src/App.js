import React, { useState } from 'react'
import Offcanvas from './Components/Offcanvas/Offcanvas'
import Navbar from './Components/Navbar/Navbar.jsx'
import Task_Dashboard from './Components/Task_Dashboard/Task_Dashboard.jsx';
import './App.css'
import Todo_List from './Components/Todo_List/Todo_List.jsx';

const App = () => {
  const [toggle, setToggle] = useState(true);
  const [array, setArray] = useState([])
  return (
    <>
      <Navbar toggle={toggle} setToggle={setToggle} />
      <Offcanvas toggle={toggle} setToggle={setToggle} />
      <div className='big-container'>
        <Task_Dashboard />
        <Todo_List array={array} setArray={setArray} />
      </div>
    </> 
  )
}

export default App

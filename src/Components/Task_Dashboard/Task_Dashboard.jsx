import React, { useEffect, useState } from 'react'
import './Task_Dashboard.css'
import CountUp from 'react-countup'

const Task_Dashboard = () => {  
  const localArray = () => {
    let key = localStorage.getItem("key")
    if (key) {
        return JSON.parse(key)
    } else {
        return []
    }
  }
  let array = localArray();
  let counter = 0;
  let total = 0;
  array.map((value, index) => {
    if(array[index].completed){
      counter += 1;
    }
    total += 1;
  }); 
  return (
    <>
        <div className='Task poppins-regular'>Task Dashboard</div>
        <div className='container'>
          <div className='card'>
            <div className='line' ></div>
            <div className='card-body'>
              <div className='font'>TASK COMPLETED</div>
              <h1>{counter}/{total}</h1>
            </div>
          </div>
          <div className='card'>
          <div className='line' style={{background: 'rgb(88, 230, 130)'}}></div>
            <div className='card-body' id='card-body'>
            <div className='font' style={{color: 'rgb(0, 216, 133)'}}>LATEST TASKS</div>
            {
                  array.map((todo, index) => {
                    return (
                      <div className='text' >{todo.completed ? <i className="fa-regular fa-circle-check"></i> : <i className="fa-regular fa-circle"></i>} {todo.name}</div>
                    )
                  })
                }
            </div>
          </div>
          <div className='card'>
          <div className='line' style={{background: 'rgb(88, 230, 130)'}} ></div>
            <div className='card-body Zo'>
              <h1 className='percentage'><CountUp start={0} end={(counter/total) * 100} duration={4} delay={1} />%</h1>
            </div>
          </div>
        </div>
    </>
  )
}

export default Task_Dashboard

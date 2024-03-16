import React, { useEffect, useState } from 'react'
import './Todo_List.css'

const Todo_List = ({ array, setArray }) => {
  const [text, setText] = useState("")
  const [newTask, setNewTask] = useState(false)
  const [edit, setEdit] = useState(false)
  const [bool, setBool] = useState(true)
  const [updateText, setUpdateText] = useState("")
  const [indexs, setIndexs] = useState()
  const [search, setSearch] = useState("")
  const handleSearch = (val) => {
    setSearch(val)
  }
  const handleNewTask = () => {
    newTask ? setNewTask(false) : setNewTask(true)
    setSearch("")
  }
  const changeTaskStatus = (index) => {
    let newTodo = [...array]
    newTodo[index].completed = !newTodo[index].completed
    setArray(newTodo)
    localStorage.setItem("key", JSON.stringify(newTodo))
  }
  const localArray = () => {
    let key = localStorage.getItem("key")
    if (key) {
      return JSON.parse(key)
    } else {
      return []
    }
  }
  const addItem = () => {
    let arr = localArray()
    let input = document.getElementById('ZO100').value
    if (input !== '') {
      arr = ([...arr, { name: input, completed: false }])
      localStorage.setItem("key", JSON.stringify(arr))
      setArray(arr)
      setText("")
    }
    setEdit(false)
  }
  const Delete = (index) => {
    let deleteArray = localArray()
    deleteArray.splice(index, 1)
    localStorage.setItem("key", JSON.stringify(deleteArray))
    setArray(deleteArray)
    setEdit(false)
    setBool(true)
    setSearch("")
  }
  const Edit = (index) => {
    let arrayToEdit = localArray()
    setEdit(true)
    setBool(false)
    setUpdateText(arrayToEdit[index].name)
    setIndexs(index)
    setNewTask(false)
  }
  const update = (index) => {
    let arrayToEdit = localArray()
    arrayToEdit[index].name = updateText
    localStorage.setItem("key", JSON.stringify(arrayToEdit))
    setArray(arrayToEdit)
    setBool(true)
    setEdit(false)
    setEdit(false)
    setBool(true)
    setSearch("")
  }
  useEffect(() => {
    setArray(localArray())
  }, [localStorage.getItem("key")])
  return (
    <>
      <div className='container1'>
        <div className='card1'>
          <div className='Zo1'>
            <div className='font1'>Task List</div>
            <div>
              <input type="text" className='input' value={search} onChange={(e) => { handleSearch(e.currentTarget.value) }} placeholder='Search by tasks name' />
              {newTask ? <button className='btn_Good' id={`${bool}`} onClick={() => { handleNewTask(); addItem(); }}>+ New Task</button> : <button className='btn_Good' id={`${bool}`} onClick={() => handleNewTask()}>+ New Task</button>}
              {edit && <button className='btn_Good' onClick={() => { update(indexs) }}>Edit Task</button>}
            </div>
          </div>
          {newTask && <ul className='Todo'>
            <li className='Zo7' id='input-field'><div className='Zo16'><input type="text" id="ZO100" className='text1' value={text} onChange={(e) => { setText(e.currentTarget.value) }} /><i className='Zo11'></i></div></li>
          </ul>}
          {edit && <ul className='Todo'>
            <li className='Zo7' id='input-field'><div className='Zo16'><input type="text" id="ZO101" className='text1' value={updateText} onChange={(e) => { setUpdateText(e.currentTarget.value) }} /><i className='Zo11'></i></div></li>
          </ul>}
          <div className='Todo'>
            <ul className='Todo_list'>
              <div id='text'>
                {(localStorage.getItem("key") == "[]") && <li className='Zo2 Zo112'><div className='Zo111'>No Task</div></li>}
                {
                  array.map((todo, index) => {
                    if (search) {
                      if (todo.name.indexOf(search) === -1) {
                        return;
                      }
                      return <li key={index} className='Zo2'><div>{todo.completed ? <i className='fa-solid fa-square-check' onClick={() => { changeTaskStatus(index) }}></i> : <i className='fa-regular fa-square' onClick={() => { changeTaskStatus(index) }}></i>}</div> <div className='Zo3' style={{ textDecoration: todo.completed ? "line-through" : "none" }}>{todo.name}</div><div className='Zo19'><i className="fas fa-edit" onClick={() => { Edit(index) }}></i> &nbsp;&nbsp;<i className="fa-solid fa-trash" onClick={() => { Delete(index) }}></i></div></li>
                      } else {
                      return <li key={index} className='Zo2'><div>{todo.completed ? <i className='fa-solid fa-square-check' onClick={() => { changeTaskStatus(index) }}></i> : <i className='fa-regular fa-square' onClick={() => { changeTaskStatus(index) }}></i>}</div> <div className='Zo3' style={{ textDecoration: todo.completed ? "line-through" : "none" }}>{todo.name}</div><div className='Zo19'><i className="fas fa-edit" onClick={() => { Edit(index) }}></i> &nbsp;&nbsp;<i className="fa-solid fa-trash" onClick={() => { Delete(index) }}></i></div></li>
                    }
                  })
                }
              </div>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Todo_List

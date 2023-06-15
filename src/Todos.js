import React, { useContext, useState } from 'react'
import { v4 as uuid } from 'uuid';
import TodoList from './TodoList';
import CentralState from './context/centralState.context';

const Todos = () => {

  const {lists, setList,selectedListItemIndex, setSelectedListItemIndex } = useContext(CentralState);
  const [todoName, setTodoName] = useState("");

  const addTodos = ()=>{
    if(todoName === "") return;
      setList((prev)=>{
        const list = [...prev];
        list[selectedListItemIndex].allTodos.push({
           id: uuid(),
           todoName,
           isCompleted:false
        });
        return list;
     })
     setTodoName("");
  }
  return (
    <div className='mainTodoList'>
      <header><b>Todo Lists</b></header>
      <div className='info'>
        {/* <h1>{lists[selectedListItemIndex].listName}</h1> */}
        <TodoList />
        <div>
          <input type="text" value={todoName} onChange={(e)=>{setTodoName(e.target.value)}} required placeholder='I will do this' />
          <button className='btn' onClick={addTodos}>Add
          </button>
        </div>
      </div>
    </div>
  )
}

export default Todos
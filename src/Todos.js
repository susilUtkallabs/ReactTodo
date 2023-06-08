import React, { useEffect, useState } from 'react'
import { v4 as uuid } from 'uuid';
import TodoList from './TodoList';

const Todos = ({lists, setList, selectedListItemIndex}) => {

  const [todoName, setTodoName] = useState("");

  const addTodos = ()=>{
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
        <TodoList lists={lists} setList={setList} selectedListItemIndex={selectedListItemIndex} />
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
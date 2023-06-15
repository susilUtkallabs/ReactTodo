import React, { useContext } from 'react';
import CentralState from './context/centralState.context';

const TodoList = () => {

  const {lists, setList,selectedListItemIndex, setSelectedListItemIndex } = useContext(CentralState);
  
  const changeTodoStatus = (todoIndex)=>{
    setList((prev)=>{
      const list = [...prev];
      list[selectedListItemIndex].allTodos[todoIndex].isCompleted = !list[selectedListItemIndex].allTodos[todoIndex].isCompleted;
      return list;
    })
  }

  const deleteTodo = (todoIndex) => {
    setList((prev)=>{
      const list = [...prev];
      list[selectedListItemIndex].allTodos.splice(todoIndex, 1);
      return list;
    })
  }

  return (
    <ul>
      {
        lists[selectedListItemIndex]?.allTodos.map((todo, index) => (
          <li key={todo.id}>{todo.todoName} <button onClick={()=>changeTodoStatus(index)}>done</button> {todo.isCompleted === false ? <button>edit</button> : ""} <button onClick={()=>deleteTodo(index)}>delete</button></li>
        ))
      }
    </ul>
  )
}

export default TodoList
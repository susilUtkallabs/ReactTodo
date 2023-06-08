import React from 'react';
import { v4 as uuid } from 'uuid';

const TodoList = ({lists, setList, selectedListItemIndex}) => {

  const changeTodoStatus = (todoIndex)=>{
    setList((prev)=>{
      const list = [...prev];
      list[selectedListItemIndex].allTodos[todoIndex].isCompleted = !list[selectedListItemIndex].allTodos[todoIndex].isCompleted;
      return list;
    })
  }

  const editTodo = (todoIndex) => {
    // setList((prev)=>{
    //   const list = [...prev];
      
    // });
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
          <li key={todo.id}>{todo.todoName} <button onClick={()=>changeTodoStatus(index)}>done</button> {todo.isCompleted === false ? <button onClick={()=> editTodo(index)}>edit</button> : ""} <button onClick={()=>deleteTodo(index)}>delete</button></li>
        ))
      }
    </ul>
  )
}

export default TodoList
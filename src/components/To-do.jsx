import React, { useState } from 'react';
import TodoForm from './To-do1';
import { FaTrash } from "@react-icons/all-files/fa/FaTrash.esm";
import { FaPencilAlt } from "@react-icons/all-files/fa/FaPencilAlt";
const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });

  const submitUpdate = value => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: ''
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
      key={index}
    >
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div className='icons'>
        <FaTrash
          onClick={() => removeTodo(todo.id)}
          className='delete'
        />
        <FaPencilAlt
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className='pencil'
        />
      </div>
    </div>
  ));
};

export default Todo;
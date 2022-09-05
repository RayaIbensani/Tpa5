import React, { useState } from 'react';
import TodoForm from './To-do1';
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
      <div className='btn'>
        <button className="btn btn-warning" className="delete" onClick={() => removeTodo(todo.id)}>Delete</button>
        <button className="btn btn-warning" className="change" onClick={() => setEdit({ id: todo.id, value: todo.text })}>Change</button>
      </div>
    </div>
  ));
};

export default Todo;
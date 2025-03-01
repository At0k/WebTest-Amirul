import React, { FC } from 'react';
import { TodoItem } from '../types';

interface TodoListProps {
  todos: TodoItem[];
  removeTodo: (index: number) => void;
}


const TodoList: React.FC<TodoListProps> = ({ todos, removeTodo }) => {
  return (
    <div>
      {todos.map((todo, index) => (
        <div key={index}>
          <span>{todo.text}</span>
          <button onClick={() => removeTodo(index)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
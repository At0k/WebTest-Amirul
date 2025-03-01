import { useEffect, useState } from 'react';
import AddItem from '../components/AddItem';
import TodoList from '../components/TodoList';
import Summary from '../components/Summary';
import { TodoItem } from '../types';

const Home = () => {
  const [todos, setTodos] = useState<TodoItem[]>([]);

  useEffect(() => {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  const onAdd = (todo: TodoItem) => {
    const updatedTodos = [...todos, todo];
    setTodos(updatedTodos);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
  };

  const removeTodo = (index: number) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <AddItem onAdd={onAdd} />
      <Summary todos={todos} items={todos} />
      <TodoList todos={todos} removeTodo={removeTodo} />
    </div>
  );
};

export default Home;
import { NextApiRequest, NextApiResponse } from 'next';

type TodoItem = {
  id: number;
  activity: string;
  price: number;
  type: string;
  bookingRequired: boolean;
  accessibility: number;
};

const getTodos = (): TodoItem[] => {
  if (typeof window === 'undefined') return [];
  const todos = localStorage.getItem('todos');
  return todos ? JSON.parse(todos) : [];
};

const saveTodos = (todos: TodoItem[]) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('todos', JSON.stringify(todos));
  }
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const todos = getTodos();
    res.status(200).json(todos);
  } else if (req.method === 'POST') {
    const newTodo: TodoItem = req.body;
    const todos = getTodos();
    newTodo.id = todos.length ? Math.max(...todos.map(todo => todo.id)) + 1 : 1;
    todos.push(newTodo);
    saveTodos(todos);
    res.status(201).json(newTodo);
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
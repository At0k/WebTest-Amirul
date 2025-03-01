import React from 'react';
import { TodoItem } from '../types';


type SummaryProps = {
  todos: TodoItem[];
  items: TodoItem[];
};

const Summary: React.FC<SummaryProps> = ({ items }) => {
  const totalItems = items.length;

  return (
    <div>
      <h2>Summary</h2>
      <p>Total items: {totalItems}</p>
    </div>
  );
};

export default Summary;
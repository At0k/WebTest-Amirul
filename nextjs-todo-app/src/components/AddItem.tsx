import React, { useState } from 'react';
import { TodoItem } from '../types';

interface AddItemProps {
  onAdd: (todo: TodoItem) => void;
}

const AddItem: React.FC<AddItemProps> = ({ onAdd }) => {
  const [activity, setActivity] = useState('');
  const [price, setPrice] = useState(0);
  const [type, setType] = useState('');
  const [bookingRequired, setBookingRequired] = useState(false);
  const [accessibility, setAccessibility] = useState(0);
  const [text, setText] = useState('');

  const handleSubmit = () => {
    const newTodo: TodoItem = {
      id: new Date().toISOString(),
      activity,
      price,
      type,
      bookingRequired,
      accessibility,
      text,
    };
    onAdd(newTodo);
    setActivity('');
    setPrice(0);
    setType('');
    setBookingRequired(false);
    setAccessibility(0);
    setText('');
  };

  return (
    <div>
      <input
        type="text"
        value={activity}
        onChange={(e) => setActivity(e.target.value)}
        placeholder="Activity"
      />
      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(Number(e.target.value))}
        placeholder="Price"
      />
      <input
        type="text"
        value={type}
        onChange={(e) => setType(e.target.value)}
        placeholder="Type"
      />
      <input
        type="checkbox"
        checked={bookingRequired}
        onChange={(e) => setBookingRequired(e.target.checked)}
      />
      <input
        type="number"
        value={accessibility}
        onChange={(e) => setAccessibility(Number(e.target.value))}
        placeholder="Accessibility"
      />
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Text"
      />
      <button onClick={handleSubmit}>Add Item</button>
    </div>
  );
};

export default AddItem;
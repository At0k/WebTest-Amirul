import React from 'react';
import { TodoItem } from '../types';


interface RemoveItemProps {
    item: TodoItem;
    onDelete: (id: number) => void;
}


const RemoveItem: React.FC<RemoveItemProps> = ({ item, onDelete }) => {
    return (
        <div>
            <span>{item.activity}</span>
            <button onClick={() => onDelete(Number(item.id))}>Remove</button>
        </div>
    );
};

export default RemoveItem;
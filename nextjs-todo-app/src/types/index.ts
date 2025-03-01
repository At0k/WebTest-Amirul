import { ReactNode } from 'react';

export interface TodoItem {
    text: ReactNode;
    id: string;
    activity: string;
    price: number;
    type: string;
    bookingRequired: boolean;
    accessibility: number;
}

export type TodoList = TodoItem[];
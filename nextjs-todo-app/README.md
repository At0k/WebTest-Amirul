# Next.js To-Do List Application

This is a simple To-Do List application built with Next.js and TypeScript. The application allows users to add, remove, and summarize to-do items, with the state of the list being persisted in local storage.

## Features

- **Add To-Do Items**: Users can add new to-do items through a form that captures various details.
- **Remove To-Do Items**: Users can remove items from the list.
- **Summary of Items**: The application displays a summary of the total number of to-do items.
- **Persistent State**: The list of to-do items is stored in local storage, ensuring that the data persists across page reloads.

## Project Structure

```
nextjs-todo-app
├── public
│   └── favicon.ico
├── src
│   ├── components
│   │   ├── AddItem.tsx
│   │   ├── RemoveItem.tsx
│   │   ├── Summary.tsx
│   │   └── TodoList.tsx
│   ├── pages
│   │   ├── api
│   │   │   └── todo.ts
│   │   ├── _app.tsx
│   │   └── index.tsx
│   ├── styles
│   │   └── globals.css
│   └── types
│       └── index.ts
├── package.json
├── tsconfig.json
└── README.md
```

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd nextjs-todo-app
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Run the development server:
   ```
   npm run dev
   ```

5. Open your browser and go to `http://localhost:3000` to view the application.

## Technologies Used

- Next.js
- TypeScript
- React
- CSS

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.
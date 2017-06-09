import React from 'react';

import TodoList from './TodoList';

const mockTodos = [
  {
    userId: 1,
    id: 1,
    title: 'delectus aut autem',
    completed: false,
  },
  {
    userId: 1,
    id: 2,
    title: 'quis ut nam facilis et officia qui',
    completed: true,
  },
];

function App() {
  return (
    <TodoList
      onTodoClick={(id) => { console.log('Clicked: ', id); }}
      todos={mockTodos}
    />
  );
}

export default App;

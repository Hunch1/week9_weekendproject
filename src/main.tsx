import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import TodoList from './ToDoList/toDoList'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TodoList/>
  </React.StrictMode>,
)

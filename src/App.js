import React from 'react';
import TodoList from './components/TodoList/TodoList';
import './App.css';

import { useGlobalContext } from './AppContext';

function App() {
const {
   todos,
   setName, 
   loading,
   addNewTodo
 } = useGlobalContext();
  return (
    <div className="App">
      <h1 className="header">My todo list</h1>
      <div className='add-todo-form'>
        <form onSubmit={addNewTodo}>
          <input 
          type='text' 
          onChange={e=>setName(e.target.value)}
            placeholder='enter todo here...'
          />
          <button type='submit'>Add new todo</button>
        </form>
      </div>
     { 
       loading? 
        <h2>Loading...</h2>:       
         <TodoList todos={todos}/>}       
    </div>
  );
}

export default App;

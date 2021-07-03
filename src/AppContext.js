import React, { useEffect, useState, createContext, useContext } from 'react';

 export const AppContext = createContext();

 export const useGlobalContext =()=> useContext(AppContext);

 export const AppProvider =({children})=>{
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [name, setName] = useState('');
  
    const newTodo = {
      userId:2,
      id:new Date().getTime().toString(),
      title:name,
      completed:[false, true][Math.floor(Math.random()*2)]
    };
  
    const addNewTodo = e =>{
      e.preventDefault();
      if(!name){
        alert('please enter a todo.');
      } else {
        setTodos([...todos, newTodo]);
        setName('');
      }    
    };
  
    const updateTodos = id =>{
      const todoLists = todos.map((todo)=>{
        if(todo.id === id) {
          const updatedTodo = {...todo, completed: !todo.completed };
          return updatedTodo;
        }
        return todo;
      });
      setTodos(todoLists);
    }
  
    const deleteTodo = id =>{
      const todosTobeKept = todos.filter(todo => todo.id !== id);
      setTodos(todosTobeKept);
    };
    const url = 'https://jsonplaceholder.typicode.com/todos';
  
    useEffect(()=>{
      const fetchData = async () => {      
        const response = await fetch(url);
        const data = await response.json();
        setTodos(data.slice(0,9)); 
        setLoading(false);
      };
      fetchData();
    },[])
    console.log('todos',todos);

    return (
        <AppContext.Provider 
        value ={{
            todos,
            name,
            setName,
            loading,
            newTodo,
            addNewTodo,
            updateTodos,
            deleteTodo,
        }} >
            {children}
        </AppContext.Provider>
    )
 }
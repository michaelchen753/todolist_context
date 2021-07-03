import React from 'react';
import { useGlobalContext } from '../../AppContext';
import ListItem from '../ListItem/ListItem';

export default function TodoList({todos}) {
    const { updateTodos, deleteTodo } = useGlobalContext();
    return (
        <div className='todo-list'>
            {
                todos.map((todo,index)=>{
                    return (
                        <ListItem 
                        key={todo.id} 
                        todo={todo} 
                        updateTodos={updateTodos} 
                        deleteTodo={deleteTodo}                            
                        />
                    )
                })
            }
        </div>
    )
};

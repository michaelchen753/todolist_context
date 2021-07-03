import React from 'react';
import { useGlobalContext } from '../../AppContext';

export default function ListItem({todo}) {
    const {title, completed, id} = todo;
    const { updateTodos, deleteTodo } = useGlobalContext();
    return (
        <div>
           <span>{title}</span>
           <span className={`${completed? 'green':'red'}`}>completed</span>
           <button type='submit' onClick={()=> updateTodos(id)} >&#10067;</button>
           <button type='submit' onClick={()=> deleteTodo(id)} >&#10006;</button>  
        </div>
    )
}

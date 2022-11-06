import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({todo, changeTodo}) => {
    return (
        <div className='todo'>
            <header className='todo__header'>
                <h3 className='todo__header__title'>ToDo</h3>
            </header>
            <div className='todo__list'>
                {todo.map(todo => 
                    <TodoItem changeTodo={changeTodo} key={todo.id} todo={todo}/>
                )}
            </div>
        </div>
    );
};

export default TodoList;
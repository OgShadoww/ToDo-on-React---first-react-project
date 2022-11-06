import React from 'react';
import Check from '../UI/check/Check';

const TodoItem = ({todo, changeTodo}) => {

    return (
        <div key={todo.id} className='todo__list__item'>
            <Check isComplete={todo.isCompleted} todo={todo} changeTodo={changeTodo}/>
            <div className="content">
                <div className={`todo__list__item__title ${todo.isCompleted ? 'finish' : ''}`}>
                    {todo.title}
                </div>
                <div className='todo__list__item__description'>
                    {todo.description}
                </div>
                <div className='todo__list__item__date'>
                    {todo.date}
                </div>
            </div>
        </div>
    );
};

export default TodoItem;
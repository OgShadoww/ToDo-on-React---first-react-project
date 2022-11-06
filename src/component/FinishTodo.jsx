import React from 'react';
import {GrAdd} from 'react-icons/gr'

const CreateTodo = ({children, ...props}) => {
    return (
        <button className='add-todo' {...props}>
            <GrAdd style={{fontSize:"20px", color:"white"}}/>
        </button>
    );
};

export default CreateTodo;
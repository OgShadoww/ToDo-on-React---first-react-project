import React from 'react';
import {AiOutlineCheck} from 'react-icons/ai'

const Check = ({isComplete, changeTodo, todo}) => {
    function completeF () {
        changeTodo(todo)
    }

    return (
        <div className={`check-box ${isComplete ? 'complete' :''}`} onClick={() => completeF()}>
            {isComplete &&
            <AiOutlineCheck className='check-mark'/>}
        </div>
    );
};

export default Check;
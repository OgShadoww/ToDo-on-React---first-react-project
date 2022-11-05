import React from 'react';
import QuestItem from './QuestItem';

const QuestList = ({quest, status, setStatus, deleteP}) => {
    
    if(quest.length === 0) {
        return (
            <div className='quiz'>
                <h1 style={{fontFamily:"sans-serif"}}>Add quest!</h1>
            </div>
        )
    }
    
    return (
        <div className='quiz'>
            <h1>All tasks</h1>
            {quest.map(quest => {   
                return <QuestItem status={status} setStatus={setStatus} key={quest.id} quest={quest}/>
            })}
        </div>
    );
};

export default QuestList;
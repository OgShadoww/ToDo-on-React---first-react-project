import React from 'react';

const QuestItem = ({quest, status, setStatus}) => {

    let statusClass = ['quizItem']

    if(status) {
        statusClass.push('finish')
    }

    return (
        <div className={statusClass.join(' ')} onClick={e => setStatus(true)}>
            <div className="title">
                {quest.title}
            </div>
        </div>  
    );
};

export default QuestItem;
import React, { useState } from 'react';

const CreateTodo = ({create, unshowPopup, date, todo, hasData}) => {
    let [value, setTodo] = useState({title:'', description:''})
    const months = ["January", "February", "March", "April", "May", "June", "July",
            "August", "September", "October", "November", "December"];

    let addNewPost = e => {
        e.preventDefault()
        if(todo.hasData) {
            const currentData = new Date()

            let year = currentData.getFullYear()
            let month = months[currentData.getMonth()]
            let day = currentData.getDate()

            const newPost = {
                ...value,
                date: `${month} ${day}, ${year}`,
                id:Date.now()
            }

            create(newPost)
        }
        else {
            const newPost = {
                ...value,
                id:Date.now()
            }

            create(newPost)
        }

        setTodo({title:'', description:''})

    }
    let unshow = (e) => {
        e.preventDefault()
        unshowPopup()
    }
    let addDate = (e) => {
        e.preventDefault()
        date(todo)
    }

    return (
        <form className='form'>
            <div className="form__top">
                <input value={value.title} onChange={e => setTodo({...value, title: e.target.value})} placeholder='Task name here...' type="text" className='form__input title' />
                <input value={value.description} onChange={e => setTodo({...value, description: e.target.value})} placeholder='Description' type="text" className='form__input description' />
            </div>
            <div className='form__bottom'>
                <div className='form__bottom__left__buttons'>
                    <button onClick={addDate} className='date'>Add date</button>
                </div>
                <div className='form__bottom__right__buttons'>
                    <button onClick={unshow} className='cancel'>Cancel</button>
                    <button className='add-task' onClick={addNewPost}>Add Task</button>
                </div>
            </div>
        </form>
    );
};

export default CreateTodo;
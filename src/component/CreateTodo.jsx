import React,{useState} from 'react';
import MyButton from '../UI/button/MyButton';
import MyInput from '../UI/input/MyInput';

const CreateTodo = ({create}) => {
    let [title, setTitle] = useState('')

    let addNewQuest = (e) => {
        e.preventDefault()
        let newQuest = {
            title,
            id:Date.now()
        }
        if(title.length > 0) {
            create(newQuest)
        }
    }

    return (
        <form className='form'>  
            <MyInput value={title} onChange={e => setTitle(e.target.value)}/>
            <MyButton onClick={addNewQuest}>Add quest</MyButton>
        </form>
    );
};

export default CreateTodo;
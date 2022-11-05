import React from 'react';
import cs from './MyButton.module.css'

const MyButton = ({children, ...props}) => {
    return (
        <button className={cs.myButton} {...props}>
            {children}
        </button>
    );
};

export default MyButton;
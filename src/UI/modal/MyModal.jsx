import React from 'react';
import cs from './MyModal.module.scss'

const MyModal = ({children, visible, setVisible}) => {
    let classes = [cs.modal]

    if(visible) {
        classes.push(cs.active)
    }

    return (
        <div className={classes.join(' ')}>
            {children}
        </div>
    );
};

export default MyModal;
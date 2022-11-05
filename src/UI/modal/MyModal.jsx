import React from 'react';
import cs from './MyModal.module.css'

const MyModal = ({children, visible, setVisible}) => {

    let rootClass = [cs.popup]

    if(visible) {
        rootClass.push(cs.active)
    }

    return (
        <div className={rootClass.join(' ')} onClick={e => setVisible(false)}>
            <div className={cs.content} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default MyModal;
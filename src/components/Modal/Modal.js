import React from 'react';

import './Modal.css';

export default function modal(props) {
    const cssClasses = ['Modal', props.show ? 'ModalOpen' : 'ModalClosed'];

    return (
        <div className={cssClasses.join(' ')}>
            <h1>A Modal</h1>
            <button className="Button" onClick={props.closed}>Dismiss</button>
        </div>        
    );
};


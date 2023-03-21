import React from 'react';

import './Backdrop.css';

export default function backdrop(props) {
    const cssClasses = ['Backdrop', props.show ? 'BackdropOpen' : 'BackdropClosed'];

    return <div className={cssClasses.join(' ')}></div>;
};

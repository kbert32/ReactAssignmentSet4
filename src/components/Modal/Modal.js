import React from 'react';
// import Transition from 'react-transition-group/Transition';
import { CSSTransition } from 'react-transition-group';

import './Modal.css';

const animationTiming = {
    enter: 500,
    exit: 1000
};

export default function modal(props) {

    return (
        <CSSTransition 
            in={props.show} 
            timeout={animationTiming} 
            mountOnEnter 
            unmountOnExit 
            // classNames='fade-slide'         //alternative way 
            classNames={{
                enter: '',
                enterActive: 'ModalOpen',
                exit: '',
                exitActive: 'ModalClosed',
                appear: '',                 //appear and appearActive can be used for animations at first render
                appearActive: '',
            }}    
        >
            <div className="Modal">
                <h1>A Modal</h1>
                <button className="Button" onClick={props.closed}>Dismiss</button>
            </div>
        </CSSTransition>        
    );
};

//CSSTransition eliminates the need for the function with the 'state' parameter
//'classNames' merges the given name (classNames='fade-slide') with 'enter', 'enter-active', 'exit', and 'exit-active
//      class names will be:
//              fade-slide-enter
//              fade-slide-enter-active
//              fade-slide-exit
//              fade-slide-exit-active

//alternatively an object can be passed to the classNames prop with properties of:
//  enter, enterActive, exit, exitActive, appear, and appearActive
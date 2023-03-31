import { useRef, useContext } from "react";

import { TodosContext } from "../store/todos-context";
import classes from './NewTodo.module.css';

const NewTodo: React.FC = () => {
    const todosCtx = useContext(TodosContext);

    const todoTextInputRef = useRef<HTMLInputElement>(null);    //null should be specified as a starting value; also: HTMLButtonElement, HTMLParagraphElement, etc.

    const submitHandler = (event: React.FormEvent) => {     //special event type provided by react package;  also has 'React.MouseEvent'
        event.preventDefault();

        const enteredText = todoTextInputRef.current!.value;// '?' tells typescript if the connection has not been established yet that the value is null
                                                            // '!' tells it that you are 100% sure this possibly nullish value will never be null in this spot
        if (enteredText.trim().length === 0) {
            //throw an error
            return;
        }

        todosCtx.addTodo(enteredText);
    };                                                      

    return (
        <form onSubmit={submitHandler} className={classes.form}>
            <label htmlFor='text'>Todo text</label>
            <input type='text' id='text' ref={todoTextInputRef}/>
            <button>Add Todo</button>
        </form>
    );
};

export default NewTodo;
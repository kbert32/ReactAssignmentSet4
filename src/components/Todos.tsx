import { useContext } from "react";

import TodoItem from "./TodoItem";
import { TodosContext } from "../store/todos-context";

import classes from './Todos.module.css';

const Todos: React.FC = () => {     //React.FC (functional component), automatically adds types for built in react component props such as 'children'
    const todosCtx = useContext(TodosContext);                                               //definitions between the angle brackets '<>' are for custom props

    return (                                                
        <ul className={classes.todos}>
            {todosCtx.items.map((item) => (
                <TodoItem key={item.id} text={item.text} onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)} />
            ))}
        </ul>
    );
};

export default Todos;
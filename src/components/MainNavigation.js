import { NavLink } from "react-router-dom";
import classes from './MainNavigation.module.css';

function MainNavigation() {
    return (
        <header className={classes.header}>
            <nav>
                <ul className={classes.list}>
                    <li>
                        <NavLink to="/" className={({isActive}) =>
                            isActive ? classes.active : undefined} end>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/products" className={({isActive}) =>
                            isActive ? classes.active : undefined}>Products</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default MainNavigation;

//CSS for NavLink can also be done inline:

// style={({ isActive }) => ({
//   textAlign: isActive ? 'center' : 'left',
// })}

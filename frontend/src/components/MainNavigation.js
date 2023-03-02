import { NavLink } from 'react-router-dom';
import classes from './MainNavigation.module.css';

function MainNavigation() {                     //for some reason the 'Home' NavLink is working properly 
  return (                                      //although it should contain the 'end' property
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink to="/" className={({isActive}) =>
              isActive ? classes.active : undefined}>Home</NavLink>   
          </li>
          <li>
            <NavLink to="/events" className={({isActive}) =>
              isActive ? classes.active : undefined}>Events</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;

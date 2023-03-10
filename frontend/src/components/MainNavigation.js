import { NavLink } from 'react-router-dom';
import classes from './MainNavigation.module.css';
import NewsletterSignup from './NewsletterSignup';

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
          <li>
            <NavLink to="/newsletter" className={({isActive}) =>
              isActive ? classes.active : undefined}>Newsletter</NavLink>
          </li>
        </ul>
      </nav>
      <NewsletterSignup />
    </header>
  );
};

export default MainNavigation;

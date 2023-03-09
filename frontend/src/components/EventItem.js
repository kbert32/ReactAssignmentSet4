import {Link, useSubmit} from  'react-router-dom';  //useSubmit allows us to trigger an 'action' function programmatically
import classes from './EventItem.module.css';

function EventItem({ event }) {
  const submit = useSubmit();

  function startDeleteHandler() { //the 'delete' button could be wrapped in the built-in 'Form' component, but then we would not get the 'window.confirm' prompt
    const proceed = window.confirm('Are you sure?');    //window.confirm is built into the browser

    if (proceed) {
      submit(null, {method: 'DELETE'}); //first argument of the 'submit' method is the data we want to submit, the data will be automatically wrapped in a form object
    }                                   //which could then be extracted with the 'formData()' method; the second argument allows us to set the same values we could set on a 'Form'
  };                                    //such as 'method' or 'action'; We are deleting so no need to send data, action is not needed since our 'action' function is within the same route
                                        //technically we don't need method but we can send it to the action function and use it there
  return (
    <article className={classes.event}>
      <img src={event.image} alt={event.title} />
      <h1>{event.title}</h1>
      <time>{event.date}</time>
      <p>{event.description}</p>
      <menu className={classes.actions}>
        <Link to='edit'>Edit</Link>
        <button onClick={startDeleteHandler}>Delete</button>  
      </menu>
    </article>
  );
}

export default EventItem;

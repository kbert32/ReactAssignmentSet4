import { useNavigate, Form } from 'react-router-dom';

import classes from './EventForm.module.css';

function EventForm({ method, event=false } = {}) {
  const navigate = useNavigate();
  function cancelHandler() {
    navigate('..');
  }                               //special Form component provided by react-router-dom, makes sure to prevent the brower's 
                                  //default of submitting the form, instead takes the request and sends it to the 'action' function
                                  //The Form component is the typical and default way to trigger an action function
                                  //By using the 'action' prop on the Form component, we can specify an action on a different route, 
                                  //otherwise the action from the currently active route will be used
  return (                            
    <Form method='post' className={classes.form}>  
      <p>
        <label htmlFor="title">Title</label>
        <input id="title" type="text" name="title" required defaultValue={event.title || ''} />
      </p>
      <p>
        <label htmlFor="image">Image</label>
        <input id="image" type="url" name="image" required defaultValue={event.image || ''}/>
      </p>
      <p>
        <label htmlFor="date">Date</label>
        <input id="date" type="date" name="date" required defaultValue={event.date || ''}/>
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea id="description" name="description" rows="5" required defaultValue={event.description || ''}/>
      </p>
      <div className={classes.actions}>
        <button type="button" onClick={cancelHandler}>
          Cancel
        </button>
        <button>Save</button>
      </div>
    </Form>
  );
}

export default EventForm;

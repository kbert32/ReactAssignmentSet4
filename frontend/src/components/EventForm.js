import { useNavigate, Form, useNavigation, useActionData, json, redirect } from 'react-router-dom'; //redirect is a special response object like json that simply redirects

import classes from './EventForm.module.css';

function EventForm({ method, event=false } = {}) {
  const actionData = useActionData(); //actionData catches validation errors sent from the back-end
  const navigate = useNavigate();
  const navigation = useNavigation();

  const isSubmitting = navigation.state === 'submitting';

  function cancelHandler() {
    navigate('..');
  }                 //special Form component provided by react-router-dom, makes sure to prevent the brower's 
                    //default of submitting the form, instead takes the request and sends it to the 'action' function
                    //The Form component is the typical and default way to trigger an action function
                    //By using the 'action' prop on the Form component, we can specify an action on a different route, 
                    //otherwise the action from the currently active route will be used
  return (                            
    <Form method={method} className={classes.form}>
      {actionData && actionData.errors && <ul>
        {Object.values(actionData.errors).map((err) => (<li key={err}>{err}</li>))} 
        </ul>}  
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
        <button type="button" onClick={cancelHandler} disabled={isSubmitting}>
          Cancel
        </button>
        <button disabled={isSubmitting}>{isSubmitting ? 'Submitting...' : 'Save'}</button>
      </div>
    </Form>
  );
}

export default EventForm;

export async function action({request, params}) {     //both loader and action function receive an object with request and params properties
  const data = await request.formData();  //To get hold of the form's data, we call the special 'formData()' method
  
  const eventData = {
      title: data.get('title'),
      image: data.get('image'),
      date: data.get('date'),
      description: data.get('description'),
  };

  let url = 'http://localhost:8080/events';

  if (request.method === 'PATCH') {
    url = 'http://localhost:8080/events/' + params.eventId;  //'eventId' is the path variable defined in App.js line 26
  }

  const response = await fetch(url, {
      method: request.method,
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(eventData)
  });

  if (response.status === 422) {      //catches error in validation from back end
      return response;
  }

  if (!response.ok) {
      throw json({message: 'Could not save event.'}, {status: 500});
  }

  return redirect('/events');
};


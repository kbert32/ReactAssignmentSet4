import {json, redirect} from 'react-router-dom';    //redirect is a special response object like json that simply redirects
import EventForm from "../components/EventForm";

function NewEventPage() {
    return <EventForm />;
};

export default NewEventPage;

export async function action({request, params}) {     //both loader and action function receive an object with request and params properties
    const data = await request.formData();  //To get hold of the form's data, we call the special 'formData()' method

    const eventData = {
        title: data.get('title'),
        image: data.get('image'),
        date: data.get('date'),
        description: data.get('description'),
    };

    const response = await fetch('http://localhost:8080/events', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(eventData)
    });

    if (!response.ok) {
        throw json({message: 'Could not save event.'}, {status: 500});
    }

    return redirect('/events');
};

import { useLoaderData, json } from 'react-router-dom';

import EventsList from '../components/EventsList';

function EventsPage() {
    const data = useLoaderData();
    const events = data.events;

    return <EventsList events={events} />;
};

export default EventsPage;

export async function loader() {
    const response = await fetch('http://localhost:8080/events');

    if (!response.ok) {
        // throw new Response(JSON.stringify({message: 'Could not fetch events.'}), {status: 500});     //Max threw the response error this way but,
        // throw new Response('haha', {status: 500, statusText: 'Could not fetch events.'});           //I prefer doing it this way.  The 'haha' string is not being used in this example, it could be replaced with null.
        throw json({message: 'Could not fetch events.'}, {status: 500});                             //Can also be done this way using react router's 'json' function, must be imported
        // throw json(null, {status: 500, statusText: 'Could not fetch events.'});                  //Alternative way using 'json' function

    } else {                                                                                  
        // const resData = await response.json();   //these statements are not needed with react router
        // return resData.events;                   //react router returns the data part of the Response constructor
        return response;                            //we can return the 'response' directly
    }
};

//any browser API's can be executed within the loader function, for example: access local storage, 
//access cookies, you can do anything you can do in normal javascript code.
//What you cannot do is use React hooks because this is not a react component
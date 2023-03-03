import { useLoaderData } from 'react-router-dom';

import EventsList from '../components/EventsList';

function EventsPage() {
    const data = useLoaderData();
    const events = data.events;

    return <EventsList events={events} />;
};

export default EventsPage;

export async function loader() {
    const response = await fetch('http://localhost:8080/eventss');

    if (!response.ok) {
        // throw new Response(JSON.stringify({message: 'Could not fetch events.'}), {status: 500});
        throw new Response('haha', {status: 500, statusText: 'Could not fetch events.'});
    } else {
        // const resData = await response.json();   //these statements are not needed with react router
        // return resData.events;                   //react router returns the data part of the Response constructor
        console.log(response);
        console.log(response.json());
        return response;                            //we can return the 'response' directly
    }
};

//any browser API's can be executed within the loader function, for example: access local storage, 
//access cookies, you can do anything you can do in normal javascript code.
//What you cannot do is use React hooks because this is not a react component
import { Suspense } from 'react';
import { useLoaderData, json, defer, Await } from 'react-router-dom';

import EventsList from '../components/EventsList';

function EventsPage() {
    const data = useLoaderData();
    const events = data.events; //data.events is initially the promise received from the defer object in the 'loader' function,
                                //once loaded, it will contain the loaded data
                                        //'Suspense' allows a 'fallback' element until the promise is fullfilled
                                        //'Await' will wait for the promise to be fullfilled then receive the data through the 'resolve' prop, then use that data to render
    return (                                                                    
        <Suspense fallback={<p style={{textAlign: 'center'}}>Loading...</p>}>   
            <Await resolve={events}>
                {(loadedEvents) => <EventsList events={loadedEvents} />}
            </Await>
        </Suspense>
    );
};

export default EventsPage;

export async function loadEvents() {
    const response = await fetch('http://localhost:8080/events');

    if (!response.ok) {
        // throw new Response(JSON.stringify({message: 'Could not fetch events.'}), {status: 500});     //Max threw the response error this way but,
        // throw new Response('haha', {status: 500, statusText: 'Could not fetch events.'});           //I prefer doing it this way.  The 'haha' string is not being used in this example, it could be replaced with null.
        throw json({message: 'Could not fetch events.'}, {status: 500});                             //Can also be done this way using react router's 'json' function, must be imported
        // throw json(null, {status: 500, statusText: 'Could not fetch events.'});                  //Alternative way using 'json' function

    } else {                                                                                  
        const resData = await response.json();   //these statements are not usually needed with react router
        return resData.events;                   //since react router returns the data part of the Response constructor
        // return response;                      //normally we can return the 'response' directly, but we must extract the data 
    }                                            //with the .json() method in this example since we are using defer() in between
};

export function loader() {
    return defer({
        events: loadEvents()    //the object returned by defer has a prop that calls the loadEvents() function and returns a promise
    })
};

//any browser API's can be executed within the loader function, for example: access local storage, 
//access cookies, you can do anything you can do in normal javascript code.
//What you cannot do is use React hooks because this is not a react component
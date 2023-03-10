import { Suspense } from 'react';
import { useRouteLoaderData, json, redirect, defer, Await } from 'react-router-dom';
import EventItem from '../components/EventItem';
import EventsList from '../components/EventsList';

function EventDetailPage() {
    const {event, events} = useRouteLoaderData('detailLoader');

    return (
        <>
            <Suspense fallback={<p style={{textAlign: 'center'}}>Loading...</p>}>
                <Await resolve={event}>
                    {(loadedEvent) => <EventItem event={loadedEvent} />}
                </Await>
            </Suspense>
            <Suspense fallback={<p style={{textAlign: 'center'}}>Loading...</p>}>
                <Await resolve={events}>
                    {(loadedEvents) => <EventsList events={loadedEvents}/>}
                </Await>
            </Suspense>
        </>
    );
};

export default EventDetailPage;

async function loadEvent(id) {
    const response = await fetch('http://localhost:8080/events/' + id);

    if (!response.ok) {
        throw json({message: 'Could not fetch event details.'}, {status: 500});
    } else {
        const resData = await response.json();
        return resData.event;
    }
};

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

export async function loader({request, params}) {
    const id = params.eventId;

    return defer({
        // event: await loadEvent(id), //we could also use 'await' here, (since this is an async function), to ensure the new page is not rendered 
        event: loadEvent(id),   //until the event detail is loaded; this would effectively make it so we never see the 'Loading...' message 
        events: loadEvents()    
    })
};

export async function action({request, params}) {
    const eventId = params.eventId;
    const response = await fetch('http://localhost:8080/events/' + eventId, {
        method: request.method, //method was sent from the 'submit' within 'EventItem' 
    });

    if (!response.ok) {
        throw json({message: 'Could not delete event.'}, {status: 500});
    }

    return redirect('/events');
};
import { useRouteLoaderData, json, redirect } from 'react-router-dom';
import EventItem from '../components/EventItem';

function EventDetailPage() {

    return (
        <EventItem event={useRouteLoaderData('detailLoader').event} />
    );
};

export default EventDetailPage;

export async function loader({request, params}) {
    const id = params.eventId;

    const response = await fetch('http://localhost:8080/events/' + id);

    if (!response.ok) {
        throw json({message: 'Could not fetch event details.'}, {status: 500});
    } else {
        return response;
    }
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
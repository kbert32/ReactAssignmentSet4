import { Suspense } from 'react';
import { useRouteLoaderData, Await } from 'react-router-dom';
import EventForm from '../components/EventForm';

function EditEventPage() {
    const {event} = useRouteLoaderData('detailLoader');
    
    return (
        <Suspense fallback={<p style={{textAlign:'center'}}>Loading...</p>}>
            <Await resolve={event}>
                {(loadedEvent) => <EventForm event={loadedEvent} method='PATCH'/>}                
            </Await>    
        </Suspense>
    ); 
};

export default EditEventPage;
import { useRouteLoaderData } from 'react-router-dom';
import EventForm from '../components/EventForm';

function EditEventPage() {
    // const data = useRouteLoaderData('detailLoader');

    return (
        <EventForm event={useRouteLoaderData('detailLoader').event}/>
    ); 
};

export default EditEventPage;
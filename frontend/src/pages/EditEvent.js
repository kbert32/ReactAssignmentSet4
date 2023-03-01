import { useParams } from "react-router-dom";

function EditEventPage() {
    const params = useParams;

    return (
        <>
            <p>{params.editId}</p>
            <h1>Edit Event</h1>
        </>
    ); 
};

export default EditEventPage;
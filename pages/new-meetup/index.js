// our-domain-.com/new-meetup
import NewMeetupForm from "@/components/meetups/NewMeetupForm";

export default function NewMeetupPage() {
    function addMeetUpHandler(enteredMeetupData) {
        console.log(enteredMeetupData);
    };

    return <NewMeetupForm onAddMeetup={addMeetUpHandler} />
};
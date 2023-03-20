import NewMeetupForm from "@/components/meetups/NewMeetupForm";
import { useRouter } from "next/router";
import Head from 'next/head';

// our-domain-.com/new-meetup

export default function NewMeetupPage() {
    const router = useRouter();
    async function addMeetUpHandler(enteredMeetupData) {

        const response = await fetch('/api/new-meetup', {
            method: 'POST',
            body: JSON.stringify(enteredMeetupData),
            headers: {
                'Content-Type': 'application/json'
            },
        });

        const data = await response.json();

        console.log(data);

        router.push('/');
    };

    return (
        <Fragment>
            <Head>
                <title>Add a New Meetup</title>
                <Meta name='description' content='Add your own meetups and create amazing networking opportunities.' />
            </Head>
            <NewMeetupForm onAddMeetup={addMeetUpHandler} />
        </Fragment>
    ); 
};
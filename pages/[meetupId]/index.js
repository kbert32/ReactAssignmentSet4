import MeetupDetail from "@/components/meetups/MeetupDetail";

export default function MeetupDetails() {
    return (
        <MeetupDetail
            image='https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg'
            title='A First Meetup'
            address='Some address 5, 12345 Some City'
            description='This is a first meetup!'
        />
    );
};

export async function getStaticPaths() {
    return {
        fallback: false,
        paths: [
            {
                params: {
                    meetupId: 'm1',
                },
            },
            {
                params: {
                    meetupId: 'm2',
                },
            },
        ],
    };
};

export async function getStaticProps(context) {
    const meetId = context.params.meetupId;
    console.log(context);
    //fetch data for a single meetup

    return {
        props: {
            meetupDate: {
                image: 'https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg', 
                id: meetId,
                title: 'A First Meetup',
                address: 'Some address 5, 12345 Some City',
                description: 'This is a first meetup! Pfft...',
            },
        },
    };
};
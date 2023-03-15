import MeetupList from '../components/meetups/MeetupList';

const MEETUPS = [
    {
        id: 'm1',
        title: 'A First Meetup',
        address: 'Some address 5, 12345 Some City',
        description: 'This is a first meetup!',
    },
    {
        id: 'm2',
        title: 'A Second Meetup',
        address: 'Some address 10, 12345 Some City',
        description: 'This is a second meetup!',
    },
]

export default function HomePage() {
    return <MeetupList meetup={MEETUPS} />
};
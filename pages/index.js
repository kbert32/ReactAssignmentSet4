import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
    {
        id: 'm1',
        title: 'A First Meetup',
        image: 'https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg',
        address: 'Some address 5, 12345 Some City',
        description: 'This is a first meetup!'
    },
    {
        id: 'm2',
        title: 'A Second Meetup',
        image: 'https://www.planetware.com/wpimages/2019/11/india-best-places-to-visit-agra.jpg',
        address: 'Some address 10, 12345 Some City',
        description: 'This is a second meetup!'
    },
];

const MEETUPS = DUMMY_MEETUPS;

export default function HomePage() {
    return <MeetupList meetups={MEETUPS} />
};
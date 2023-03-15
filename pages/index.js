import MeetupList from '../components/meetups/MeetupList';

const MEETUPS = [
    {
        id: 'm1',
        title: 'A First Meetup',
        image: 'https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg',
        addres: 'Some address 5, 12345 Some City',
        description: 'This is a first meetup!'
    },
    {
        id: 'm2',
        title: 'A Second Meetup',
        image: 'https://www.planetware.com/wpimages/2019/11/india-best-places-to-visit-agra.jpg',
        addres: 'Some address 10, 12345 Some City',
        description: 'This is a second meetup!'
    },
];

export default function HomePage() {
    return <MeetupList meetups={MEETUPS} />
};
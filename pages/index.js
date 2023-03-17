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

export default function HomePage(props) {   //props received here comes from the 'getStaticProps' function

    return <MeetupList meetups={props.meetups} />;
};

    //getStaticProps is a reserved name, Next.js looks for this name, and if it finds it, it executes this function
    //before pre-rendering the component. The 'getStaticProps' function must be declared within the component.  
    //It can run asynchronously so it returns a promise, Next.js will wait for the promise to resolve  
    //before executing the component function, therefore you're able to load data before the component is rendered 
    //You can execute code in this function that would normally run on a server, (access a file system, securely connect
    //to a database or API), this function is only executed during the build process, not on the server or on the client side
    //
export async function getStaticProps() {    //this function must return an object, typically with a 'props' property
    //fetch data from an API
    return {
        props: {
            meetups: DUMMY_MEETUPS, 
            revalidate: 10              //revalidate unlocks a feature called incremental static regeneration, this page will 
        }                               //be re-generated on the server every 10 seconds if there are requests coming in for this page
    };                                  //ensures that the page will re pre-generate on the server after deployment to avoid having to
};                                      //redeploy and rebuild just because some data changed
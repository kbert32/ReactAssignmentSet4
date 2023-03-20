import { MongoClient } from 'mongodb';
import MeetupList from '../components/meetups/MeetupList';
import Head from 'next/head';

// const DUMMY_MEETUPS = [
//     {
//         id: 'm1',
//         title: 'A First Meetup',
//         image: 'https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg',
//         address: 'Some address 5, 12345 Some City',
//         description: 'This is a first meetup!'
//     },
//     {
//         id: 'm2',
//         title: 'A Second Meetup',
//         image: 'https://www.planetware.com/wpimages/2019/11/india-best-places-to-visit-agra.jpg',
//         address: 'Some address 10, 12345 Some City',
//         description: 'This is a second meetup!'
//     },
// ];

export default function HomePage(props) {   //props received here come from the 'getStaticProps' function

    return ( 
        <>
            <Head>
                <title>React Meetups</title>
                <meta name='description' content='Browse a huge list of highly active React meetups!' />
            </Head>
            <MeetupList meetups={props.meetups} />;
        </>
    );
};

    //getStaticProps is a reserved name, Next.js looks for this name, and if it finds it, it executes this function
    //before pre-rendering the component. The 'getStaticProps' function must be declared within the component.  
    //It can run asynchronously so it returns a promise, Next.js will wait for the promise to resolve  
    //before executing the component function, therefore you're able to load data before the component is rendered 
    //You can execute code in this function that would normally run on a server, (access a file system, securely connect
    //to a database or API), this function is only executed during the build process, not on the server or on the client side
    
export async function getStaticProps() {    //this function must return an object, typically with a 'props' property
    //fetch data from an API
    const client = await MongoClient.connect('mongodb+srv://kbert32:vacation32@cluster0.umq2lww.mongodb.net/meetups?retryWrites=true&w=majority');
    const db = client.db();

    const meetupsCollection = db.collection('meetups');
    
    const meetups = await meetupsCollection.find().toArray();

    client.close();

    return {
        props: {
            meetups: meetups.map(meetup => ({
                title: meetup.title,
                address: meetup.address,
                image: meetup.image,
                description: meetup.description,
                id: meetup._id.toString(),
            })), 
            revalidate: 10              //revalidate unlocks a feature called incremental static regeneration, this page will 
        }                               //be re-generated on the server every 10 seconds if there are requests coming in for this page
    };                                  //ensures that the page will re pre-generate on the server after deployment to avoid having to
};                                      //redeploy and rebuild just because some data changed



//'getServerSideProps' is a reserved name, the difference from 'getStaticProps' is that this function will not run during the build process
//instead it will always run on the server after deployment. like 'StaticProps', it returns and object with a 'props' property.  Any code
//in this function will run on the server, not on the client.  You can also perform operations that use credentials because this code only 
//runs on the server.  There is no 'revalidate' prop to set because this function runs with every incoming request.  This function receives
//a 'context' argument, which contains 'request' and 'response' objects.  The 'request' object can be used for authentication, checking on
//session cookies, or anything like that.  'request' object contains headers and body.


// export async function getServerSideProps(context) {
//     const req = context.req;
//     const res = context.res;
//     //fetch data from an API/filesystem

//     return {
//         props: {
//             meetups: DUMMY_MEETUPS,
//         }
//     };

// };

//Which function is better for pre-render?

//'getServerSideProps' should be used when access to the 'request' object is needed for authentication, or if you are dealing with data that
//constantly changes, (like multiple times per second).  Otherwise, 'getStaticProps' is a better choice because it pre-generates an HTML file,
//that can be stored or cached which is faster than fetching and regenerating that data for every incoming request.  Both of these functions 
//allow your app to fetch data and provide it to the component before it is rendered since they can run asynchronously and return a promise.  
//This is helpful for search engine optimization because otherwise your component will pre-render without all of the data.  The component will 
//basically render twice, once with no data, then a second time once it receives the data.  The end user will see the fetched data, but a web 
//crawler may not.  **BOTH OF THESE ARE KEY FUNCTIONS BUILT INTO NEXT.JS THAT ARE NEEDED ALL OF THE TIME**
import { MongoClient, ObjectId} from "mongodb";
import MeetupDetail from "@/components/meetups/MeetupDetail";
import Head from 'next/head';

export default function MeetupDetails(props) {
    return (
        <>
            <Head>
                <title>{props.meetupData.title}</title>
                <meta name='description' content={props.meetupData.description} />
            </Head>
            <MeetupDetail
                image={props.meetupData.image}
                title={props.meetupData.title}
                address={props.meetupData.address}
                description={props.meetupData.description}
            />
        </>
    );
};
            //'getStaticPaths' is used when the component has a dynamic path, in order for 'getStaticProps' to pre-build the page, 'getStaticPaths' needs to pre-build the paths
export async function getStaticPaths() {        
    const client = await MongoClient.connect('mongodb+srv://kbert32:vacation32@cluster0.umq2lww.mongodb.net/meetups?retryWrites=true&w=majority');
    const db = client.db();

    const meetupsCollection = db.collection('meetups');
    
    const meetups = await meetupsCollection.find({}, {_id: 1}).toArray();

    client.close();

    return {
        fallback: false,
        paths: meetups.map((meetup) => ({
            params: {
                meetupId: meetup._id.toString(),
            }
        })),
    };
};

export async function getStaticProps(context) {
    const meetId = context.params.meetupId;

    //fetch data for a single meetup
    const client = await MongoClient.connect('mongodb+srv://kbert32:vacation32@cluster0.umq2lww.mongodb.net/meetups?retryWrites=true&w=majority');
    const db = client.db();

    const meetupsCollection = db.collection('meetups');
    
    const selectedMeetup = await meetupsCollection.findOne({_id: new ObjectId(meetId)});

    client.close();


    return {
        props: {
            meetupData: {
                id: selectedMeetup._id.toString(),
                title: selectedMeetup.title,
                address: selectedMeetup.address,
                image:selectedMeetup.image,
                description: selectedMeetup.description,
            },        
        },
    };
};
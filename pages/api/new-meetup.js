import {MongoClient} from 'mongodb';    // must install mongodb node driver first: "npm install mongodb"

// /api/new-meetup
// POST /api/new-meetup

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const data = req.body;

        const client = await MongoClient.connect('mongodb+srv://kbert32:vacation32@cluster0.umq2lww.mongodb.net/meetups?retryWrites=true&w=majority');
        const db = client.db();

        const meetupsCollection = db.collection('meetups');

        const result = await meetupsCollection.insertOne(data);

        console.log(result);

        client.close();

        res.status(201).json({message: 'Meetup inserted!'});
    }
};
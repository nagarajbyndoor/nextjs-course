// api/new-meetup

import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method == "POST") {
    const data = req.body;
    const client = await MongoClient.connect(
      "mongodb+srv://nagaraj:K0KFFN0I2F7vfMfi@cluster0.dbcu9c7.mongodb.net/?retryWrites=true&w=majority"
    );
    const db = client.db();
    const meetupsCollections = db.collection("meetups");
    const result = await meetupsCollections.insertOne(data);
    console.log(result);
    client.close();
    res.status(201).json({ message: "Meetup Inserted" });
  }
}

export default handler;

import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

const client = new MongoClient(process.env.MONGO_URI);
export let db;

export async function connectToMongo() {
  if (!db) {
    await client.connect();
    db = client.db("Baruch'sDB");
    console.log("Connected to MongoDB");
  }
  return db;
}


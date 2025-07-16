import { connectToMongo } from "../db/mongoClient.js";

export async function reportsCollection() {
  const db = await connectToMongo();
  return db.collection("intel_reports");
}

import { reportsCollection } from "../models/reportModel.js";
import { ObjectId } from "mongodb";

export async function getAllReports() {
  const collection = await reportsCollection();
  return await collection.find().toArray();
}

export async function getReportById(id) {
  const collection = await reportsCollection();
  return await collection.findOne({ _id: new ObjectId(id) });
}

export async function createReport(reportData) {
  const collection = await reportsCollection();
  if (!reportData.timestamp) {
    reportData.timestamp = new Date();
  }
  if (typeof reportData.confirmed !== "boolean") {
    reportData.confirmed = false;
  }
  const result = await collection.insertOne(reportData);
  return result.insertedId;
}

export async function confirmReport(id) {
  const collection = await reportsCollection();
  const result = await collection.updateOne(
    { _id: new ObjectId(id) },
    { $set: { confirmed: true } }
  );
  return result.modifiedCount;
}

export async function deleteReport(id) {
  const collection = await reportsCollection();
  const result = await collection.deleteOne({ _id: new ObjectId(id) });
  return result.deletedCount;
}
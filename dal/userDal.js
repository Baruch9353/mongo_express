import { usersCollection } from "../models/userModel.js";
import { ObjectId } from "mongodb";

export async function getAllUsersDal() {
  return await usersCollection().find().toArray();
}

export async function createUserDal(userData) {
  return await usersCollection().insertOne(userData);
}

export async function updateUserDal(id, updatedData) {
  return await usersCollection().updateOne(
    { _id: new ObjectId(id) },
    { $set: updatedData }
  );
}

export async function deleteUserDal(id) {
  return await usersCollection().deleteOne({ _id: new ObjectId(id) });
}

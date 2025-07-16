import { db } from '../db/mongoClient.js';

export const usersCollection = () => db.collection('users');
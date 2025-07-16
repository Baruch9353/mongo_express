import express from 'express';
import { config } from 'dotenv';
import usersRouter from './routes/users.js';
import { connectToMongo } from './db/mongoClient.js';

config();
const app = express();
app.use(express.json());

await connectToMongo();

app.use('/users', usersRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
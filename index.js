import express from 'express';
import { config } from 'dotenv';
import configRoutes from './routes/configRoutes.js';
import { connectToMongo } from './db/mongoClient.js';

config();
const app = express();
app.use(express.json());

await connectToMongo();

configRoutes(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
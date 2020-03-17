import express from 'express';
import cors from 'cors';
import { config as dotenv } from 'dotenv';

import db from './db';

dotenv();
db();

const app = express();
app.use(cors());
app.use(express.json());

export default app;

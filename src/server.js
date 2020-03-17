import app from './config/app';
import db from './config/db';

db(process.env.MONGO_URI);
app.listen(process.env.PORT);

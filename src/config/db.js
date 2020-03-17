import { connect, connection } from 'mongoose';

export default () => {
  try {
    connect(
      process.env.MONGO_URI,
      {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
    );

    connection.once('open', () => {
      console.log('Connected to database');
    });
  } catch (error) {
    console.log(`Couldn't connect to database: ${error}`);
  }
};

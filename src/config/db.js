import { connect, connection } from 'mongoose';

export default (connectionString) => {
  try {
    connect(
      connectionString,
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

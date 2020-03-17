import mongoose from 'mongoose';

export default () => {
  try {
    mongoose.connect(
      process.env.MONGO_URI,
      {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
    );

    mongoose.connection.on('open', () => {
      console.log('Connected to database');
    });
  } catch (error) {
    console.log(`Couldn't connect to database: ${error}`);
  }
};

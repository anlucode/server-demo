import MongoClient from 'mongodb';

export async function connect() {
  try {
    const client = await MongoClient.connect('mongodb+srv://luis:kakar0t0@cluster0.pugl5.mongodb.net/', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    const db = client.db('demo')
    console.log('base de datos conectada');
    return db;
  } catch (error) {
    console.log(error)
  }
};

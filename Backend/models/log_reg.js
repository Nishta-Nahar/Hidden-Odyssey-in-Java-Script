const mongoose = require('mongoose');

const Bangalore_CitySchema = new mongoose.Schema({
  rest_id: String,
  rest_name: String,
  rest_addr: String,
  rest_reviews: String,
  rest_menu: String
})

const Bangalore_CityModel = mongoose.model('restaurant', Bangalore_CitySchema);

module.exports = Bangalore_CityModel;


// const mongoose = require('mongoose');

// const miniprojectSchema = new mongoose.Schema({

//     name: String,
//     phone: String,
//     email: String,
//     password: String,
//     place_id: String,
//     place_count: String

// })

// const miniprojectModel = mongoose.model("register",miniprojectSchema);
// module.exports =miniprojectModel

// Connect to the MongoDB database
// const mongoClient = require('mongodb').MongoClient;
// const url = 'mongodb://localhost:27017';
// const dbName = 'miniproject';

// (async () => {
//   try {
//     const client = await mongoClient.connect(url);
//     const db = client.db(dbName);

//     // Create the "miniproject" collection if it doesn't exist
//     await db.createCollection('registers');

//     // Define a schema for documents in the "miniproject" collection
//     const schema = {
//       name: 'string',
//       phone: 'string',
//       email: 'string',
//       password: 'string'
//     };

//     // Create indexes for the "name", "phone", and "email" fields to improve query performance
//     await db.collection('registers').createIndex({ name: 1 });
//     await db.collection('registers').createIndex({ phone: 1 });
//     await db.collection('registers').createIndex({ email: 1 });
//     await db.collection('registers').createIndex({ password: 1 });

//     console.log('MongoDB setup completed successfully.');
//   } catch (error) {
//     console.error('Error setting up MongoDB:', error);
//   } finally {
//     await client.close();
//   }
// })();
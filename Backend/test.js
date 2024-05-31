const express = require('express');
const { MongoClient, ObjectID } = require('mongodb');
const app = express();
const port = 3000;

const url = 'mongodb://127.0.0.1/Bangalore_City';
// const dbName = 'Bangalore_City';
const collectionName = 'restaurants';

app.use(express.json());

// Connection to MongoDB
let client;

MongoClient.connect(url).then((connectedClient)=>{

    client=connectedClient;
    const db=client.db("Bangalore_City");
}).then(()=>{
    console.log("connected");
    
    // Create a new restaurant
    app.post('/restaurants', (req, res) => {
      const resto = {
        rest_name: 'Fishermans Warf',
        rest_addr: 'Harlur Road,Bangalore',
        rest_reviews: '4.8',
        rest_menu: 'Cheese Potato balls, Potato Wedges, Lasagne',
      };
      
      db.collection(('restaurants')).insertOne(resto);
    });
    
    // Read all restaurants
    app.get('/restaurants', (req, res) => {
  db.collection('restaurants').find({}).toArray((err, result) => {
    if (err) {
      console.error('Error reading restaurants:', err);
      res.status(500).send('Internal Server Error');
      return;
    }
    res.json(result);
  });
});

// Update a restaurant's grade
app.put('/update', (req, res) => {
  const restaurantId = req.params.id;
  
  db.collection('restaurants').updateOne(
    { _id: new ObjectID(restaurantId) },
    { $set: { rest_reviews: '5' } },
    (err, result) => {
      if (err) {
        console.error('Error updating restaurant grade:', err);
        res.status(500).send('Internal Server Error');
        return;
      }
      
      if (result.matchedCount === 0) {
        res.status(404).send('Restaurant not found');
      } else {
        res.status(200).send('Restaurant grade updated!');
      }
    }
    );
  });
}).catch((err)=>{
    console.log("ERROR :"+err);
})
  
  // Start the server
  app.listen(port, () => {
    console.log(`Server is running`);
  })
  
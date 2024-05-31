const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const Bangalore_CityModel = require('./models/log_reg')

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/Bangalore_City")


app.post('/restaurants',(req,res)=>{

    Bangalore_CityModel.create(req.body)
    .then(Bangalore_City=>res.json(Bangalore_City))
    // .then(res=>alert("Welcome to Hidden Odessy!"))
    .catch(err=>res.json(err));

})

app.listen(3000,()=>{

    console.log("server is running...");
})










// const express = require('express')
// const mongoose = require('mongoose')
// const cors = require('cors')
// const miniprojectModel = require('./models/log_reg')

// const app = express()
// app.use(express.json())
// app.use(cors())

// mongoose.connect("mongodb://127.0.0.1:27017/miniproject")


// app.post('/login',(req,res)=>{

//     const {email, password} = req.body;
//     miniprojectModel.findOne({email: email})
//     .then(user=>{
//         if(user)
//         {
//             if(user.password=== password)
//             {
//                 res.json("Success");
//             }
//             else
//             {
//                 res.json("incorrect")
//             }
//         }
//         else
//         {
//             res.json("incorrect");
//         }
//     })
//     // miniprojectModel.create(req.body)
//     // .then(miniproject=>res.json(miniproject))
//     // // .then(res=>alert("Welcome to Hidden Odessy!"))
//     // .catch(err=>res.json(err));

// })
// app.post('/register',(req,res)=>{

//     miniprojectModel.create(req.body)
//     .then(miniproject=>res.json(miniproject))
//     // .then(res=>alert("Welcome to Hidden Odessy!"))
//     .catch(err=>res.json(err));

// })

// app.listen(3000,()=>{

//     console.log("server is running...");
// })



// // const express = require('express');
// // const mongodb = require('mongodb');
// // const cors = require('cors');

// // const app = express();
// // app.use(express.json());
// // app.use(cors());

// // // Connect to MongoDB
// // const client = new mongodb.MongoClient('mongodb://127.0.0.1:27017');

// // (async () => {
// //   try {
// //     await client.connect();
// //     const db = client.db('miniproject');

// //     // Define the login route
// //     app.post('/login', async (req, res) => {
// //       const { email, password } = req.body;

// //       const user = await db.collection('registers').findOne({ email });
// //       if (user) {
// //         if (user.password === password) {
// //           res.json('Success');
// //         } else {
// //           res.json('incorrect');
// //         }
// //       } else {
// //         res.json('incorrect');
// //       }
// //     });


// //     app.post('/register', async (req, res) => {
// //         const { name, email, phone, password } = req.body;
      
// //         const client = new mongodb.MongoClient('mongodb://127.0.0.1:27017');
// //         await client.connect();
// //         const db = client.db('miniproject');
      
// //         try {
// //           await db.collection('registers').insertOne({ name, email, phone, password });
// //           res.json('success');
// //         } catch (error) {
// //           console.error('Error registering user:', error);
// //           res.status(500).json('failed');
// //         } finally {
// //           await client.close();
// //         }
// //       });

// //     // Start the server
// //     app.listen(3000, () => {
// //       console.log('Server started on port 3000');
// //     });
// //   } catch (error) {
// //     console.error('Error connecting to MongoDB:', error);
// //   }
// // })();

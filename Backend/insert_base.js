//deux ,ethods for insertion
const { MongoClient }=require("mongodb");
const { db } = require("./models/log_reg");
const url="mongodb://127.0.0.1/miniproject";
let client;
MongoClient.connect(url).then((connectedClient)=>{

    client=connectedClient;

}).then(()=>{
    
    db.collection.updateMany({},{$set:{"place_id":0}});
    db.collection.updateMany({},{$set:{"place_count":0}});
    // const collection=client.db("miniproject").collection("register");
    // return collection.insertMany(data);

}).then(()=>{

    console.log("inserted Many");
    client.close();

}).catch((err)=>{
    console.log(err);
})
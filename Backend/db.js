const mongoose = require ('mongoose');
const mongoURI='mongodb://localhost:27017/miniproject';
const mongoDB =async () =>{
    await mongoose.connect(mongoURI,{useNewUrlParser : true },async()=>{
        console.log("connected");
        const fetched_data = await mongoose.connection.db.collection("tickets");
        fetched_data.find({}).toArray(function(err,data){
            if (err) console.log(err);
            else console.log(data);
            // if (err) console.log(err);
            // else {
            //     global.tickets=data;
        })
    });
}

module.exports = mongoDB;


module.exports = mongoDB;
const mongoose = require('mongoose');

const miniprojectSchema = new mongoose.Schema({

    id: String,
    place: String,
    price: String,
    details: String,
    imageURL: String

})

const miniprojectModel = mongoose.model("tickets",miniprojectSchema);
module.exports =miniprojectModel
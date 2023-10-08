import mongoose from 'mongoose'

mongoose.connect('mongodb+srv://vinita:1234@cluster0.4wtptzz.mongodb.net/register?retryWrites=true&w=majority');

export const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to MongoDB"));


db.once('open', function(){
    console.log('Connected to Database :: MongoDB');
});


// module.exports = db;


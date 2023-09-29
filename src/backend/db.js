const mongoose = require('mongoose');

const mongoURI = 'mongosh "mongodb+srv://newsmedia.ymot1cz.mongodb.net/myFirstDatabase" --apiVersion 1 --username amanjaiswar28';

mongoose.set("strictQuery", false);
const connectToMongo = () => {
    mongoose.connect(mongoURI, () => console.log("\nConnected to Mongo Successfully!"));
}

module.exports = connectToMongo;
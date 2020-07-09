const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('../schema/schema');
const mongoose = require('mongoose')

const app = express();
const PORT = 3000;

mongoose.connect('mongodb+srv://Admin:eliseevgen@cluster0.anani.mongodb.net/graphQl?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true})
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql:true,
}));
const dbConnection =mongoose.connection
dbConnection.on('error',err=>console.log(`Connection error:${err}`))
dbConnection.once('open',()=>console.log(`Connection to DB!`))
app.listen(PORT, err => {
  err ? console.log(err) : console.log('Server started!');
});
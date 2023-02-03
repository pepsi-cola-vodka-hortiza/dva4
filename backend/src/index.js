require('dotenv').config();
const helmet = require('helmet');
const db = require('./db');
const typeDefs = require('./schema');
const models = require('./models')
const resolvers = require('./resolvers');
const jwt = require('jsonwebtoken');
const express = require('express');
const {ApolloServer} = require('apollo-server-express')

const port = process.env.PORT || 8080;
const DB_HOST = process.env.DB_HOST;

const app = express();

app.use(helmet());

const getUser = token => {
    if(token) {
      return jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        return decoded;
        });
    }
}

async function startServer() {
    db.connect(DB_HOST);
    const server = new ApolloServer({
        typeDefs,
        resolvers,
        context: ({req}) => {
            const token = req.headers.authorization;
            const user = getUser(token);
            return {models, user}
        }
    });
    await server.start();
    server.applyMiddleware({app, path: '/api'});
}
startServer();

app.listen({port}, () => console.log(`Listen on port ${port}...`));

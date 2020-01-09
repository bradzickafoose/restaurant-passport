const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const server = express();


server.use(cors());
server.use(helmet());
server.use(express.json());




const usersRouter = require('../users/users-router');
const citiesRouter = require('../cities/cities-router');
const manyToManyRouter = require('../manyToMany/manyToMany-router')
/* const manyToManyRouter = require('../manyToMany/manyToMany-router') */


server.use('/users', usersRouter);
server.use('/cities', citiesRouter)
server.use('/manyToMany', manyToManyRouter)
/* server.use('/manyToMany', manyToManyRouter) */

server.get('/', (req, res) => res.status(200).json({ message: 'API is online' }));

module.exports = server;
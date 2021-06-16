const express = require('express');

const server = express();

//methods of handling requests

const handleAllTypesOfRequests =(req, res) =>{
    res.send("Response from server.use");
}

const handleProfilePutRequestType =(req, res) =>{
    res.send('Responded to profile request with method of value put ')
}

server.use('/profile', handleAllTypesOfRequests);
server.get('/login', (req, res) =>res.send('Hi this is the login page'));
server.put('/profile',handleProfilePutRequestType);
server.post('/register', (req, res)=>res.send('Hey resgister here'))
server.patch('/signin', (req, res)=>res.send('From sign in'))

server.listen(4000, ()=> console.log('server is ready'));
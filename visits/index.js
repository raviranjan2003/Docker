const express = require('express');
const redis = require('redis');

const app = express();

const client = redis.createClient();
//initialize visits to be 0
client.set('visits', 0);

app.get("/",(req,res)=>{
    client.get('visits', (err,visits)=>{
        res.send("Number of visits : ", visits);
        client.set('visits', parseInt(visits)+1);
    })
})

app.listen(8080,()=>{
    console.log("Server listening on port 8080:");
})
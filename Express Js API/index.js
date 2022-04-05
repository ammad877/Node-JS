const express = require('express');

const PORT = 4000;
const app = express();

let users = [
    { name: 'User 1', id: 1},
    { name: 'User 2', id: 2},
    { name: 'User 3', id: 3},
    { name: 'User 4', id: 4},
]

const urlParser = express.json();
app.use(urlParser);

app.get('/',(req,res) => {
    res.statusCode = 200;
    res.send("Welcome")
})

app.get('/getallusersdata',(req,res)=> {
    res.statusCode = 200;
    res.json(users)
})

app.listen(PORT, ()=> {
    console.log(`RUNNING SERVER ON http://localhost:${PORT}`)
})
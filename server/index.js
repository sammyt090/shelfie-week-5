require('dotenv').config();
const express = require('express')

const ctr1 = require('./controller')
const massive = require('massive')

const app = express()
// const SERVER_PORT = 4567
const {SERVER_PORT, CONNECTION_STRING} = process.env


massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
}).then(db => {
    app.set('db', db);
    console.log('db connected')
    app.listen(SERVER_PORT, () => console.log(`Shelve it on ${SERVER_PORT}`));
}).catch(err => console.log(err))

app.use(express.json())



app.get('/api/inventory', ctr1.postList)
app.get('/api/inventory/:id' , ctr1.grabId)
app.post('/api/inventory', ctr1.createList)
app.delete('/api/inventory/:id', ctr1.deleteList)
app.put('/api/inventory/:id', ctr1.editList)



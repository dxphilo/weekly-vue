
const express = require('express');
const mongodb = require('mongodb');

const password = 'uTBNvjQr7SEcEVf'

const router = express.Router();
// GET 
router.get('/', (req, res) => {
    res.send('<h1>404 | Not Found</h1>')
})

// POST request to the  mongo DB server
router.post('/', async (req, res) => {
    const subs = await loadSubscriptionCollection();
    await subs.insertOne({
        text: req.body.text,
        createdAt: new Date()
    });
    res.status(201).send();

})

async function loadSubscriptionCollection() {
    const client = await mongodb.MongoClient.connect('mongodb+srv://philoweb:uTBNvjQr7SEcEVf@cluster0.3xsdp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', { useUnifiedTopology: true, useNewUrlParser: true })
    return client.db('philoweb').collection('subscribers')
}


module.exports = router;

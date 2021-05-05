
const express = require('express');
const mongodb = require('mongodb');
const config = require('../../config/keys.js');


const router = express.Router();
// GET 
router.get('/', async (req, res) => {
    const subemail = await loadSubscriptionCollection();
    // fetch all the info from the database
    res.send(await subemail.find({}).toArray())

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
    const client = await mongodb.MongoClient.connect(`${config.keys.mongoUri}`, { useUnifiedTopology: true, useNewUrlParser: true })
    return client.db('weeklyvue').collection('subscribers')
}


module.exports = router;

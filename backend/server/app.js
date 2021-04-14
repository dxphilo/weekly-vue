
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();
app.use(bodyParser.json());
app.use(cors());

const subscribe = require('../routes/api/subscribe');

app.use('/subscribe', subscribe)

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started in port ${port}`))
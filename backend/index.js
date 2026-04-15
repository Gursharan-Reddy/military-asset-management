const express = require('express');
const cors = require('cors');
const { connectDB } = require('./db');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

connectDB();

app.use('/api/purchases', require('./routes/purchases'));
app.use('/api/transfers', require('./routes/transfers'));
app.use('/api/assignments', require('./routes/assignments'));

app.get('/api/assets', async (req, res) => {
    const Asset = require('./models/asset');
    try {
        const assets = await Asset.findAll();
        res.json(assets);
    } catch (err) { res.status(500).send(err.message); }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Military Backend Listening on Port ${PORT}`));
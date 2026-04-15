const express = require('express');
const router = express.Router();
const Asset = require('../models/asset');
const auth = require('../middleware/auth');

router.post('/', auth(['Admin', 'Logistics Officer']), async (req, res) => {
    const { assetName, type, quantity, base } = req.body;
    try {
        let asset = await Asset.findOne({ where: { assetName, base } });
        if (asset) {
            asset.quantity += parseInt(quantity);
            await asset.save();
        } else {
            asset = await Asset.create({ assetName, type, quantity, base });
        }
        res.status(201).json(asset);
    } catch (err) { res.status(500).json({ error: err.message }); }
});

module.exports = router;
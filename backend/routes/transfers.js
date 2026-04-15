const express = require('express');
const router = express.Router();
const Asset = require('../models/asset');
const auth = require('../middleware/auth');

router.post('/', auth(['Admin', 'Logistics Officer']), async (req, res) => {
    const { assetName, fromBase, toBase, quantity } = req.body;
    try {
        const source = await Asset.findOne({ where: { assetName, base: fromBase } });
        if (!source || source.quantity < quantity) {
            return res.status(400).json({ message: 'Inadequate stock for transfer' });
        }

        source.quantity -= parseInt(quantity);
        await source.save();

        let dest = await Asset.findOne({ where: { assetName, base: toBase } });
        if (dest) {
            dest.quantity += parseInt(quantity);
            await dest.save();
        } else {
            await Asset.create({ assetName, type: source.type, quantity, base: toBase });
        }
        res.json({ message: 'Logistics Transfer Complete' });
    } catch (err) { res.status(500).json({ error: err.message }); }
});

module.exports = router;
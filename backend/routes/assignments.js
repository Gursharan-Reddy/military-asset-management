const express = require('express');
const router = express.Router();
const Asset = require('../models/asset');
const auth = require('../middleware/auth');

// POST: Assign assets to a unit
router.post('/', auth(['Admin', 'Base Commander']), async (req, res) => {
    const { assetName, base, quantity, assignedTo } = req.body;

    try {
        // 1. Find the asset at the specific base
        const asset = await Asset.findOne({ 
            where: { 
                assetName: assetName, 
                base: base 
            } 
        });

        // 2. Validation: Does it exist?
        if (!asset) {
            return res.status(404).json({ message: `Asset "${assetName}" not found at ${base}.` });
        }

        // 3. Validation: Is there enough stock?
        if (asset.quantity < parseInt(quantity)) {
            return res.status(400).json({ 
                message: `Insufficient Stock! Available: ${asset.quantity}, Requested: ${quantity}` 
            });
        }

        // 4. Operation: Deduct from inventory
        asset.quantity -= parseInt(quantity);
        await asset.save();

        // 5. Success Response
        res.status(200).json({ 
            message: `Success! ${quantity} units of ${assetName} assigned to ${assignedTo}.` 
        });

    } catch (err) {
        // Log error for the developer and send message to frontend
        console.error("Assignment Error:", err);
        res.status(500).json({ message: "Internal Server Error: " + err.message });
    }
});

module.exports = router;
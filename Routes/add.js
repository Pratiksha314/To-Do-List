var express = require('express');
var router = express.Router();
var itemModel = require('../public/app/Models/item');

router.post('/addItem', async (req, res) => {
    const addItem = itemModel(
        {
            itemName: req.body.itemName,
        }
    );
    try {
        var saveItem = await addItem.save();
        res.json(saveItem)
    } catch (err) {
        res.json(err);
    }
});

module.exports = router;
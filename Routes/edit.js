var express = require('express');
var router = express.Router();
var itemModel = require('../public/app/Models/item');

router.patch('/updateItem/:id', async (req, res) => {
    try {
        var updateItem = await itemModel.updateOne({ _id: req.params.id }, {
            $set: {
                itemName: req.body.itemName,
            }
        });
        res.json(updateItem);
    } catch (error) {
        res.json(error);
    }
});

module.exports = router;
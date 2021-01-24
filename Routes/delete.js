var express = require('express');
var router = express.Router();
var itemModel = require('../public/app/Models/item');

router.delete('/deleteItem/:itemId', async (req, res) => {
    try {
        var itemDelete = await itemModel.remove({ _id: req.params.itemId });
        res.json(itemDelete);
    } catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;
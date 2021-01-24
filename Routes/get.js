var express = require('express');
var router = express.Router();
var itemModel = require('../public/app/Models/item');

//get all items
router.get('/getItem', async (req, res) => {
    try {
        var getItems = await itemModel.find();
        res.json(getItems);
    } catch (error) {
        console.log(error);
    }
});

//get by id
router.get('/getItemById/:Itemid', async (req, res) => {
    try {
        var getItem = await itemModel.findById({ _id: req.params.Itemid });
        res.send(getItem)
    } catch (error) {
        console.log(error);
    }
})

module.exports = router;
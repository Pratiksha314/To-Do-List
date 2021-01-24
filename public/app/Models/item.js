var mongoose = require('mongoose');
var dateObject =  new Date;
var day = dateObject.getDate();
var month = dateObject.getMonth() + 1 ;
var year = dateObject.getFullYear();
var fullDate = day + '/' + month + '/' + year;

const itemSchema = mongoose.Schema({
itemName :{
    type: String
},
date : {
    type: String,
    default :  fullDate,
}
});

const itemModel = mongoose.model("Item List", itemSchema);
module.exports = itemModel;
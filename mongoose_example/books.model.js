var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BookSchema = new Schema({
    title:String,
    published:{
        type:Date,
        default:Date.now
    },
    keywords:Array,
    published:Boolean,
    author:{
        type:Schema.ObjectId,
        type:Schema.Types.ObjectId,
        ref:'User'
    },
    detail:{
        modelNumber:Number,
        hardcover:Boolean,
        review:Number,
        rank:Number
    }

})

module.exports = mongoose.model('Book',BookSchema);
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const NewsModelSchema = new Schema({
    title : String,
    detail : String,
})

const News = mongoose.model('News', NewsModelSchema);
module.exports = {
    News
}; 
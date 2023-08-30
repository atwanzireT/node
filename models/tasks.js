const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    name : {type:String, required:[true, "Must Provide name!"], trim:true},
    completed : Boolean,
})

const Task = mongoose.model('Task', TaskSchema);
module.exports = {
    Task
}; 
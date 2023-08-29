const mongoose = require("mongoose");

const connection_string = "mongodb://127.0.0.1:27017/task_manager";

const connectDB = () => {
    return mongoose.connect(connection_string)
        .then(() => {
            console.log("Connected to DB ...");
        })
        .catch((err) => {
            console.error("Connection error:", err);
        });
}

module.exports = connectDB;
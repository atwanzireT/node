const connectDB = require("./db/connect")
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/tasks");
const app = express();
app.use(express.json());

// PORT
const PORT = 3000

// middlewares
app.use("/v1/api/tasks", routes)


// mongoose.set("strictQuery", false);
// // Mongo connect
// main().catch((err) => console.error("Failed to connect to database"));
// async function main(){
//     mongoose.connect("mongodb://localhost:27017/express")
// }

const start = async () => {
    try {
        await connectDB()
        app.listen(PORT, () => { console.log(`Server still listening at ${PORT}`) })
    } catch (error) {
        console.log(error)
    }
}

start()
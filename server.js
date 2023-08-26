const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const path = require("path");

// PORT
const PORT = 3500

// middlewares
app.use("/", routes)


mongoose.set("strictQuery", false);
// Mongo connect
main().catch((err) => console.error("Failed to connect to database"));
async function main(){
    mongoose.connect("mongodb://localhost:27017")
}


app.listen(PORT, ()=>{`Server still listening at ${PORT}`})
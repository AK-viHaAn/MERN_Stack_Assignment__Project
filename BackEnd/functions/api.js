const express = require("express")
const mongoose = require("mongoose")
const serverless = require('serverless-http');
const route = require("../src/route/route")
const app = express()

app.use(express.json())

const cors = require('cors')
app.use(cors({
    origin: '*'
}));

mongoose.connect("mongodb+srv://viHaAn:vihaan@cluster0.tznueha.mongodb.net/DragAndDrop-DB", { useNewUrlParser: true })
    .then(() => console.log("MongoDB is Connected"))
    .catch((err) => console.log(err.message))

app.use("/.netlify/functions/api", route)

module.exports.handler = serverless(app);
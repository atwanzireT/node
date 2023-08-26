const express = require("express");
const {News} = require("./models");
const router = express.Router();

router.get('/', (req, res) => {
    try {
        res.send("Hello World");
    } catch (error) {
        
    }
});

router.post('/', async(req, res) => {
    try {
        const {title, content} = req.body();
        const newNews = new News({title, content});
        // Save News
        const savedNews = await newNews.save();
    } catch (error) {
        
    }
})

router.get('/about/', (req, res) => {
    res.send("About Us");
});

module.exports = router;
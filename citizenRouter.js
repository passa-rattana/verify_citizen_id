// citizenRouter.js

var express = require("express");
var router = express.Router();
var citizen = require("./citizenModel");

// Get All
router.get("/", (req, res) => {
    citizen.find().exec((err, data) => {
        if (err) return res.status(400).send(err);
        res.status(200).send(data);
    });
});

module.exports = router;
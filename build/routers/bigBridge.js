"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** module express */
var express = require("express");
var router = express();
/* Home page */
router.get('/', function (req, res) {
    res.send("hello man/girl");
});
/* export home */
module.exports = router;

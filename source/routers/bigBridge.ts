/** module express */
import express = require('express');
const router: express.Application = express();

/* Home page */
router.get('/', function (req, res) {
    res.send("hello man/girl");
});

/* export home */
module.exports = router;
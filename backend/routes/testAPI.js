var express = require('express');
var router = express.Router();

router.get("/", function(req, res, next)
    {
        res.json({key:"es una prueba XD"});
    }
);

module.exports = router;

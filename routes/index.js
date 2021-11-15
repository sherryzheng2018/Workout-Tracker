const express = require('express');
const router = express.Router();
const apiRoutes = require("./api")
const appRoutes = require("./frontendRoutes")


router.use("/api",apiRoutes)
router.use("/",appRoutes)


module.exports = router;
const router = require("express").Router();
const articleRoutes = require("./articles");

// Article routes
router.use("/books", articleRoutes);

module.exports = router;

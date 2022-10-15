const express = require("express");
const usersRouter = require("./usersRouter");
const postsRouter = require("./postsRouter");

const router = express.Router();

router.use("/users", usersRouter.router);
router.use("/posts", postsRouter.router);

module.exports = router;

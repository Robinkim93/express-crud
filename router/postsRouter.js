const express = require("express");
const postsController = require("../controller/postsController");

const router = express.Router();

router.post("/newposts", postsController.newPosts);

module.exports = { router };

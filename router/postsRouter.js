const express = require("express");
const postsController = require("../controller/postsController");

const router = express.Router();

router.post("/newposts", postsController.newPosts);
router.get("/all", postsController.getAllPosts);
router.get("/:userId", postsController.getUserAllPosts);

module.exports = { router };

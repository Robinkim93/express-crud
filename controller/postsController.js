const postsService = require("../service/postsService");

const newPosts = async (req, res, next) => {
  const { title, content, userId } = req.body;

  if (!title || !content || !userId) {
    return res.status(400).json({ message: "KEY_ERROR" });
  }

  await postsService.newPosts(title, content, userId);
  return res.status(201).json({ message: "postCreated" });
};

module.exports = { newPosts };

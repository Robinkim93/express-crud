const postsService = require("../service/postsService");

const newPosts = async (req, res, next) => {
  const { title, content, userId } = req.body;

  if (!title || !content || !userId) {
    return res.status(400).json({ message: "KEY_ERROR" });
  }

  await postsService.newPosts(title, content, userId);
  return res.status(201).json({ message: "postCreated" });
};

const getAllPosts = async (req, res, next) => {
  const data = await postsService.getAllPosts();
  return res.status(201).json({ message: data });
};

const getUserAllPosts = async (req, res, next) => {
  const { userId } = req.params;
  if (!userId) {
    return res.status(400).json({ message: "KEY_ERROR" });
  }
  const data = await postsService.getUserAllPosts(userId);
  return res.status(200).json({ message: data });
};

module.exports = { newPosts, getAllPosts, getUserAllPosts };

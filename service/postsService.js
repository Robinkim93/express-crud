const postsDao = require("../model/postsDao");

const newPosts = async (title, content, userId) => {
  return await postsDao.newPosts(title, content, userId);
};

module.exports = { newPosts };

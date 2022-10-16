const postsDao = require("../model/postsDao");

const newPosts = async (title, content, userId) => {
  return await postsDao.newPosts(title, content, userId);
};

const getAllPosts = async () => {
  return await postsDao.getAllPosts();
};

const getUserAllPosts = async (userId) => {
  const postingList = [];
  const data = await postsDao.userGetAllPosts(userId);

  for (let i = 0; i < data.length; i++) {
    postingList.push({
      postingId: data[i].postingId,
      postingImageUrl: data[i].postingImageUrl,
      postingContent: data[i].postingContent,
    });
  }

  const result = {
    userId: data[0].userId,
    userProfileImage: data[0].userProfileImage,
    postings: postingList,
  };

  return result;
};
module.exports = { newPosts, getAllPosts, getUserAllPosts };

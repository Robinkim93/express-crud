const myDataSource = require("../util/dataSource");
const { promisify } = require("util");

const newPosts = async (title, content, userId) => {
  return await myDataSource.query(
    `INSERT INTO posts (
        title, content, user_id
        ) VALUES 
        (?, ?, ?)`,
    [title, content, userId]
  );
};

const getAllPosts = async () => {
  return await myDataSource.query(`
    SELECT 
      u.id as userId,
      u.profile_image as userProfileImage,
      p.id as postingId,
      p.image_url as postingImageUrl,
      p.content as postingContent
    FROM users as u, posts as p
    `);
};

const userGetAllPosts = async (userId) => {
  return await myDataSource.query(`
  SELECT 
    u.id as userId,
    u.profile_image as userProfileImage,
    p.id as postingId,
    p.image_url as postingImageUrl,
    p.content as postingContent
  FROM posts as p
  INNER JOIN users as u ON p.user_id = u.id
  WHERE u.id = ${userId}
  `);
};

const postsModify = async (userId, postingId, content) => {
  console.log(userId, postingId);
  await myDataSource.query(`
  UPDATE posts SET content="${content}" WHERE user_id=${userId} AND id=${postingId}
  `);

  const data = await myDataSource.query(`
  SELECT
    u.id as userId,
    u.name as userName,
    p.id as postingId,
    p.title as postingTitle,
    p.content as postingContent
  FROM users as u
  INNER JOIN posts as p ON p.user_id = u.id
  WHERE u.id=${userId} AND p.id=${postingId}
  `);

  return data;
};

module.exports = { newPosts, getAllPosts, userGetAllPosts, postsModify };

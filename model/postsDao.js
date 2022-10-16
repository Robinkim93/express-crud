const myDataSource = require("../util/dataSource");

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

module.exports = { newPosts, getAllPosts, userGetAllPosts };

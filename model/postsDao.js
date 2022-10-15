const myDataSource = require("../util/dataSource");

const newPosts = async (title, content, userId) => {
  return await myDataSource.query(
    `
        INSERT INTO posts (
            title, content, user_id
            ) VALUES 
            (?, ?, ?)`,
    [title, content, userId]
  );
};

module.exports = { newPosts };

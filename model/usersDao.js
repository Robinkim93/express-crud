const myDataSource = require("../util/dataSource");

const signUp = async (email, name, password, profileImage) => {
  return await myDataSource.query(
    `
    INSERT INTO users (
      email, name, password, profile_image
      ) VALUES 
      (?, ?, ?, ?)`,
    [email, name, password, profileImage]
  );
};

module.exports = { signUp };

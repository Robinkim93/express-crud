const usersDao = require("../model/usersDao");

const signUp = async (email, name, password, profileImage) => {
  return await usersDao.signUp(email, name, password, profileImage);
};

module.exports = { signUp };

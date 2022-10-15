const usersService = require("../service/usersService");

const signUp = async (req, res, next) => {
  try {
    const { email, name, password, profileImage } = req.body;

    if (!email || !name || !password || !profileImage) {
      return res.status(400).json({ message: "KEY_ERROR" });
    }

    await usersService.signUp(email, name, password, profileImage);

    return res.json({ message: "userCreated" });
  } catch (error) {
    return res.status(error.statusCode || 500).json({ message: error.message });
  }
};

module.exports = { signUp };

const User = require("../models/User");
const { hashPassword, comparePasswords } = require("../helpers/bcrypt");
const { createToken } = require("../helpers/jwt");

module.exports.postUser = async (input) => {
  const { email, username, password, passwordAux } = input;

  try {
    if (password != passwordAux) {
      throw new Error("Passwords don't match");
    }
    let userExists = await User.findOne({
      email,
    });
    if (userExists) {
      throw new Error("The entered email is already registered");
    }
    userExists = await User.findOne({
      username,
    });
    if (userExists) {
      throw new Error("The entered username is already registered");
    }
  } catch (e) {
    return e;
  }

  try {
    const hashedPassword = await hashPassword(password);
    const newUser = new User({ email, username, password: hashedPassword });
    await newUser.save();
    const token = createToken(newUser);
    return token;
  } catch (e) {
    console.log(e);
    throw new Error("Failed to register the user");
  }
};

module.exports.authenticateUser = async (input) => {
  const { email, password } = input;

  try {
    const userExits = await User.findOne({
      email,
    });
    if (!userExits) {
      throw new Error("The user is not registered");
    }
    const passwordValidation = await comparePasswords(
      password,
      userExits.password
    );
    if (!passwordValidation) {
      throw new Error("Incorrect password");
    }
    const token = createToken(userExits);
    return token;
  } catch (e) {
    return e;
  }
};

// module.exports.getUserByUsername = async (username, user) => {
//   if (user) {
//     try {
//       const users = await User.find({
//         username: { $regex: new RegExp(".*" + username, "i") },
//       });
//       return users;
//     } catch (e) {
//       console.log(e);
//       throw new Error("Cannot get the users");
//     }
//   }
//   throw new Error("session expired");
// };

const UsersModal = require("../Model/UserSchemas");

// get user by id

exports.get = async (req, res) => {
  try {
    const result = await UsersModal.find();
    res.status(200).send(result);
    console.log(result, "Get Request");
  } catch (err) {
    res.status(500).send(err);
    console.log(err, "Get Request Error");
  }
};
// create a new user
exports.create = async (req, res) => {
  try {
    const newUser = req.body;
    const useremail = req.body.email;

    // check if user already exists

    const email = await UsersModal.findOne({ email: useremail });
    console.log("email", email);
    if (email) {
      res.status(400).send({ message: "Email already exists" });
    } else {
      const result = await UsersModal.create(newUser);
      result.save();
      res.status(200).send(result);
      console.log(result, "Post Request");
    }
  } catch (err) {
    res.status(500).send(err);
    console.log(err, "Post Request Error ");
  }
};
// update a user by id
exports.update = async (req, res) => {
  const _id = req.params.id;
  try {
    const { username, age, email, password, confirmPassword, phone } = req.body;

    const result = await UsersModal.findByIdAndUpdate(
      _id,
      {
        username,
        age,
        email,
        password,
        confirmPassword,
        phone,
      },
      { new: true }
    );
    res.send(result);
    console.log(result, "Put Request");
  } catch (err) {
    res.status(500).send(err);
    console.log(err, "Put Request Error ");
  }
};
// delete a user by id
exports.delete = async (req, res) => {
  const _id = req.params.id;
  try {
    const result = await UsersModal.deleteOne({ _id });
    res.send({ message: "User Deleted" });
  } catch (err) {
    res.status(401).send({ message: "User Not Deleted" });
  }
};

module.exports = exports;

require("./Connection/mongoConnect");
const mongoose = require("mongoose");
const express = require("express");
const UsersModal = require("./Model/UserSchemas");
const app = express();
const port = process.env.PORT || 8000;
app.use(express.json());

// getting all the users

app.get("/getUser", async (req, res) => {
  try {
    const result = await UsersModal.find();
    res.status(200).send(result);
    console.log(result, "Get Request");
  } catch (err) {
    res.status(500).send(err);
    console.log(err, "Get Request Error");
  }
});

// creating a new user

app.post("/createUser", async (req, res) => {
  try {
    const newUser = req.body;
    const result = await UsersModal.create(newUser);
    result.save();
    res.status(200).send(result);
    console.log(result, "Post Request");
  } catch (err) {
    res.status(500).send(err);
    console.log(err, "Post Request Error ");
  }
});

// updating a user by id

app.put("/updateUser/:id", async (req, res) => {
  const _id = req.params.id;
  try {
    const { name, email, password } = req.body;

    const result = await UsersModal.findByIdAndUpdate(
      _id,
      {
        name,
        email,
        password,
      },
      { new: true }
    );
    req.status(200).send(result);
    console.log(result, "Put Request");
  } catch (err) {
    res.status(500).send(err);
    console.log(err, "Put Request Error ");
  }
});

// delete a user by id

app.delete("/deleteUser/:id", async (req, res) => {
  const _id = req.params.id;
  console.log(_id, "id found here");
  try {
    const result = await UsersModal.deleteOne({ _id });
    res.send({ message: "User Deleted" }, { new: true });
    console.log(result, "Delete Request");
  } catch (err) {
    console.log(err, "Delete Request Error ");
    res.status(401).send(err);
  }
});
const userRoutes = require("./routes/userRoutes");
app.use("/", userRoutes);
// listening to the port
app.listen(port, async () => {
  try {
    console.log(`server is running on port ${port} successfully`);
  } catch (err) {
    console.log(" unable to connect the server", err);
  }
});

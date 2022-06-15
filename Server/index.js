// require("./Connection/mongoConnect");
const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://root:root@cluster0.lmm3q.mongodb.net/UserList?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected To Altas Database Successfully");
  })
  .catch((err) => {
    console.log(err);
  });

// const mongoose = require("mongoose");
const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
const cors = require("cors");
app.use(express.json());
app.use(cors());
const userRoutes = require("./routes/userRoutes");
app.use("/", userRoutes);

app.listen(port, async () => {
  try {
    console.log(`server is running on port ${port} successfully`);
  } catch (err) {
    console.log(" unable to connect the server", err);
  }
});

// require("dotenv").config();
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

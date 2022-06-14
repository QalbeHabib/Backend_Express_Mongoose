const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");

router.get("/getUser", userController.get);
router.post("/createUser", userController.create);
router.put("/updateUser/:id", userController.update);
router.delete("/deleteUser/:id", userController.delete);


module.exports = router;

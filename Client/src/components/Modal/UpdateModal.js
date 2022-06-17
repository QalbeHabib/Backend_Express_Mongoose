import React, { useEffect, useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { TbEdit } from "react-icons/tb";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  // width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  backgroundColor: "#000",
  boxShadow: 24,
  borderRadius: "15px",
  p: 4,
};

const UpdateModal = ({ id }) => {
  const navigate = useNavigate();
  const Url = "http://localhost:8000";

  const [data, setData] = useState([]);
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // updataeUser
  const handleSubmit = (e) => {
    e.preventDefault();
    const uesrData = { ...data };
    axios
      .put(`${Url}/updateUser/${id}`, uesrData)
      .then((res) => {
        console.log(res);
        alert("User Updated Successfully");

        navigate("/allusers");
      })
      .catch((err) => {
        console.error(err);
      });
  };



  return (
    <div>
      <div className="">
        <section>
          <div>
            <Button
              onClick={handleOpen}
              sx={{ minWidth: "0px", padding: "8px 16px" }}
            >
              <TbEdit />
            </Button>
            <Modal open={open} onClose={handleClose}>
              <Box sx={style}>
                <form onSubmit={handleSubmit}>
                  <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                    <div>
                      <label
                        class="text-white dark:text-gray-200"
                        for="username"
                      >
                        Username
                      </label>
                      <input
                        id="username"
                        type="text"
                        name="username"
                        onChange={handleChange}
                        placeholder="Username"
                        class="block w-full px-4 py-2 mt-2 text-black bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                      />
                    </div>
                    <div>
                      <label class="text-white dark:text-gray-200" for="age">
                        Age
                      </label>
                      <input
                        id="age"
                        type="number"
                        name="age"
                        onChange={handleChange}
                        placeholder="Age "
                        class="block w-full px-4 py-2 mt-2 text-black bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                      />
                    </div>
                    <div>
                      <label
                        class="text-white dark:text-gray-200"
                        for="emailAddress"
                      >
                        Email Address
                      </label>
                      <input
                        id="email"
                        type="email"
                        onChange={handleChange}
                        name="email"
                        placeholder="Email Address"
                        class="block w-full px-4 py-2 mt-2 text-black bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                      />
                    </div>

                    <div>
                      <label
                        class="text-white dark:text-gray-200"
                        for="password"
                      >
                        Password
                      </label>
                      <input
                        id="password"
                        type="password"
                        onChange={handleChange}
                        name="password"
                        placeholder="Password"
                        class="block w-full px-4 py-2 mt-2 text-black bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                      />
                    </div>

                    <div>
                      <label
                        class="text-white dark:text-gray-200"
                        for="passwordConfirmation"
                      >
                        Password Confirmation
                      </label>
                      <input
                        id="confirmPassword"
                        type="password"
                        name="confirmPassword"
                        onChange={handleChange}
                        class="block w-full px-4 py-2 mt-2 text-black bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                      />
                    </div>
                    <div>
                      <label class="text-white dark:text-gray-200" for="Phone">
                        Phone
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="text"
                        onChange={handleChange}
                        class="block w-full px-4 py-2 mt-2 text-black bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                      />
                    </div>
                  </div>

                  <div class="flex justify-end mt-6">
                    <button class="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                      Save
                    </button>
                  </div>
                </form>
              </Box>
            </Modal>
          </div>
        </section>
      </div>
    </div>
  );
};

export default UpdateModal;

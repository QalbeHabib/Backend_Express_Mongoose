import axios from "axios";
import React, { useState } from "react";

const CreateUser = () => {
  const [data, setData] = useState([]);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const Url = "http://localhost:8000";
    const uesrData = { ...data };

    axios
      .post(`${Url}/createUser`, uesrData)
      .then((res) => {
        console.log(res);
        alert("User Created Successfully");
      })
      .catch((err) => {
        console.log(err);
        alert("User Creation Failed", err);
      });
    return data;
  };

  return (
    <>
      <div className="mx-5 my-10">
        <section class="max-w-4xl p-6 mx-auto bg-gray-900 rounded-md shadow-md dark:bg-gray-800 ">
          <h2 class="text-lg font-semibold text-white capitalize dark:text-white">
            Add A User
          </h2>

          <form onSubmit={handleSubmit}>
            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <div>
                <label class="text-white dark:text-gray-200" for="username">
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
                <label class="text-white dark:text-gray-200" for="emailAddress">
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
                <label class="text-white dark:text-gray-200" for="password">
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
        </section>
      </div>
    </>
  );
};

export default CreateUser;

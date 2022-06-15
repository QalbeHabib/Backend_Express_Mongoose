import React from "react";
import { BiEdit } from "react-icons/bi";
import { MdOutlineDelete } from "react-icons/md";
import Scroll from "../Scroll";
import { TbEdit } from "react-icons/tb";

const UserTable = ({ SearchFilter }) => {
  return (
    <div>
      <div className="max-w-6xl mx-5 mb-10">
        <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-between items-center transition-all duration-1000 ">
          {SearchFilter.map((value) => {
            return (
              <div>
                <div className=" ">
                  <article className="p-1 shadow-lg rounded-xl bg-green-500 rounded-lg ">
                    <a
                      href=""
                      className="flex flex-col justify-end h-full p-2 bg-gray-900 sm:p-4 rounded-xl  rounded-lg hover:scale-105"
                    >
                      <div className="mt-2">
                        <p className="text-xs font-medium text-gray-500">
                          26/05/2021
                        </p>
                        <h5 className="mt-2 text-sm font-bold text-white">
                          {value.name}
                        </h5>
                        <h5 className="mt-2 text-sm font-bold text-white">
                          {value.email}{" "}
                        </h5>
                        <h5 className="mt-2 text-sm font-bold text-white">
                          {value.phone}
                        </h5>
                        <div className="flex items-center justify-between mt-6">
                          <p className="text-sm font-medium  bg-clip-text bg-gradient-to-r from-red-400 to-red-600"></p>
                          <ul className="flex space-x-1">
                            <li className="inline-block rounded-full text-white text-xs font-medium px-3 py-1.5 bg-gray-800">
                              <TbEdit size={30} />
                            </li>
                            <li className="inline-block rounded-full text-white text-xs font-medium px-3 py-1.5 bg-gray-800">
                              Delete
                            </li>
                          </ul>
                        </div>
                      </div>
                    </a>
                  </article>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* new */}

      {/* new */}
    </div>
  );
};

export default UserTable;

import React from "react";
import { TbEdit } from "react-icons/tb";
import { MdOutlineDeleteSweep } from "react-icons/md";
import { BiAddToQueue } from "react-icons/bi";
import { Link } from "react-router-dom";

const UserTable2 = ({ SearchFilter }) => {
  return (
    <div>
      <section className="text-gray-600 body-font mx-5">
        <div className=" px-5   ">
          <div className="  overflow-auto ">
            <table className="table-auto  text-left whitespace-no-wrap border-separate">
              <thead>
                <tr>
                  <th className="px-4 py-3   tracking-wider font-medium text-white bg-gray-900 rounded-tl rounded-bl">
                    Name
                  </th>
                  <th className="px-4 py-3   tracking-wider font-medium text-white bg-gray-900">
                    Age{" "}
                  </th>
                  <th className="px-4 py-3   tracking-wider font-medium text-white bg-gray-900">
                    Email{" "}
                  </th>
                  <th className="px-4 py-3   tracking-wider font-medium text-white bg-gray-900">
                    Rule
                  </th>
                  <th className="px-4 py-3   tracking-wider font-medium text-white bg-gray-900">
                    Phone
                  </th>
                  <th className="px-4 py-3   tracking-wider font-medium text-white bg-gray-900">
                    Date
                  </th>
                  <th className="px-4 py-3 text-center  tracking-wider font-medium text-white bg-gray-900">
                    Operation
                  </th>
                </tr>
              </thead>
              <tbody>
                {SearchFilter.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td className="px-4 py-3 ">{item.name}</td>
                      <td className="px-4 py-3">{item.age}</td>
                      <td className="px-4 py-3">{item.email}</td>
                      <td className="px-4 py-3">{item.Password}</td>
                      <td className="px-4 py-3">{item.phone}</td>
                      <td className="px-4 py-3">{item.Date}</td>
                      <td className="px-4 py-3 space-x-2">
                        <Link to="/">
                          <button className="border border-green-500 hover:bg-green-700 text-black font-bold hover:text-white transition duration-500 py-2 px-4 rounded">
                            <BiAddToQueue />
                          </button>
                        </Link>
                        <button className="border-blue-500 border  hover:bg-blue-700 text-black hover:text-white transition duration-500 scale-105 font-bold py-2 px-4 rounded">
                          <TbEdit />
                        </button>
                        <button className="border border-red-500 hover:bg-red-700 text-black font-bold hover:text-white transition duration-500 py-2 px-4 rounded">
                          <MdOutlineDeleteSweep />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UserTable2;

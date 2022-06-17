import React, { useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";

import Search from "./components/Search";
import UserTable from "./components/Table";
import Scroll from "./components/Scroll";
import UserTable2 from "./components/Table/Table";
import { TbEdit } from "react-icons/tb";
import { MdOutlineDeleteSweep } from "react-icons/md";
import { BiAddToQueue } from "react-icons/bi";

function Main() {
  // Search handle
  const [changeId, setChangeId] = React.useState("");
  const [search, setSearch] = React.useState("");
  const [data, setData] = React.useState([]);

  
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const SearchFilter = data.filter((value) => {
    return value.username.toLowerCase().includes(search.toLowerCase());
  });

  // Search handle End

  useEffect(() => {
    axios.get("http://localhost:8000/getUser").then((res) => {
      setData(res.data);
    });
  }, [changeId]);
  const Url = "http://localhost:8000";

  const handleDelete = (id) => {
    setChangeId(id);
    axios.delete(`${Url}/deleteUser/${id}`).then((res) => {
      console.log(res, "res");
    });
  };

  return (
    <>
      <Search handleSearch={handleSearch} />
      <div className="mt-10 flex justify-center items-center">
        {SearchFilter.length ? (
          <div>
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
                console.log(item);
                return (
                  <tr key={index}>
                    <td className="px-4 py-3 ">{item.username}</td>
                    <td className="px-4 py-3">{item.age}</td>
                    <td className="px-4 py-3">{item.email}</td>
                    <td className="px-4 py-3">{item.Password}</td>
                    <td className="px-4 py-3">{item.phone}</td>
                    <td className="px-4 py-3">{item.createdAt}</td>
                    <td className="px-4 py-3 space-x-2">
                      {/* <Link to="/">
                          <button className="border border-green-500 hover:bg-green-700 text-black font-bold hover:text-white transition duration-500 py-2 px-4 rounded">
                            <BiAddToQueue />
                          </button>
                        </Link> */}
                      <button className="border-blue-500 border  hover:bg-blue-700 text-black hover:text-white transition duration-500 scale-105 font-bold py-2 px-4 rounded">
                        <TbEdit />
                      </button>
                      <button
                        onClick={() => handleDelete(item._id)}
                        className="border border-red-500 hover:bg-red-700 text-black font-bold hover:text-white transition duration-500 py-2 px-4 rounded"
                      >
                        <MdOutlineDeleteSweep />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          </div>
        ) : (
          <div className="text-2xl text-center lg:text-4xl font-bold">
            "{search}" User Not found
          </div>
        )}
      </div>
    </>
  );
}

export default Main;

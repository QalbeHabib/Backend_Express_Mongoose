import React, { useEffect } from "react";
import { TbEdit } from "react-icons/tb";
import { MdOutlineDeleteSweep } from "react-icons/md";
import { BiAddToQueue } from "react-icons/bi";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Url = "http://localhost:8000";

const UserTable2 = ({ SearchFilter }) => {
  const navigate = useNavigate();
  const handleDelete = (id) => {
    console.log(id, "habib");
    axios.delete(`${Url}/deleteUser/${id}`).then((res) => {
      console.log(res, "res");
      navigate("/");
      navigate("/allusers");
    });
  };
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
              
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UserTable2;

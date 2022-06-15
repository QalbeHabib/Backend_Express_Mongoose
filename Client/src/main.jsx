import React, { useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";

import Search from "./components/Search";
import UserTable from "./components/Table";
import Scroll from "./components/Scroll";
import UserTable2 from "./components/Table/Table";

function Main() {
  // Search handle
  const [search, setSearch] = React.useState("");
  const [data, setData] = React.useState([]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const SearchFilter = data.filter((value) => {
    return value.name.toLowerCase().includes(search.toLowerCase());
  });

  // Search handle End

  useEffect(() => {
    axios.get("http://localhost:8000/getUser").then((res) => {
      setData(res.data);
    });
  }, []);
  return (
    <>
      <Search handleSearch={handleSearch} />
      <div className="mt-10 flex justify-center items-center">
        {SearchFilter.length ? (
          <div>
            {/* <UserTable SearchFilter={SearchFilter} /> */}

            <UserTable2 SearchFilter={SearchFilter} />
          </div>
        ) : (
          <div className="text-2xl text-center lg:text-4xl font-bold">
            "{search}" User Not found
          </div>
        )}

        {/* Modal */}
      </div>
    </>
  );
}

export default Main;

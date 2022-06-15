import React from "react";

const Scroll = (props) => {
  return (
    <div className=" overflow-y-scroll overflow-x-hidden  bg-red-400 mx-auto mb-10 p-10">
      {props.children}
    </div>
  );
};

export default Scroll;

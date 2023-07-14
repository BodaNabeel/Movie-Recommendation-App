import React, { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import {useNavigate} from "react-router-dom"
function Search({ setQuery }) {
  const navigate = useNavigate()
  const getQuery = (event) => {
    if (event.key === "Enter") {
      setQuery(event.target.value);
      event.target.blur();
      event.target.value = "";
      navigate("/")

    }
  };
  return (
    <div className="flex  justify-center">
      <div className="flex border-2 rounded-md mt-10 px-3 py-2  border-black w-[30%] md:w-[80%] items-center">
        <input
          maxLength={30}
          className=" w-[90%] focus:outline-none"
          type="text"
          placeholder="enter movie..."
          onKeyDown={getQuery}
        />
        <BsSearch className="w-[10%]" />
      </div>
    </div>
  );
}

export default Search;

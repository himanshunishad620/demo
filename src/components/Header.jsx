import React from "react";
import { FaRegPlusSquare } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
export default function Header() {
  return (
    <div className="px-14 flex justify-between items-center top-0 sticky h-13 w-full bg-[#624DE3]">
      <div className="relative">
        <input
          className="border-1 border-white bg-white  focus:outline-none rounded-md h-9 pr-10 px-5 w-60"
          type="text"
          placeholder="Search by ID"
        />
        <IoSearchSharp className="absolute top-[50%] right-3 transform translate-y-[-50%] text-2xl text-gray-400" />
      </div>
      <button>
        <FaRegPlusSquare className="text-2xl text-white" />
      </button>
    </div>
  );
}

import React from "react";
import { HiOutlineSearch } from "react-icons/hi";
import PROFILE_IMAGE from "../../assets/profile.jpg";

export default function Header() {
  return (
    <div className="bg-[#060606] h-16 px-4 flex justify-between text-white items-center">
      <div className="relative border border-gray-400  rounded-lg ">
        <HiOutlineSearch
          fontSize={20}
          className="absolute left-3 top-1/2 -translate-y-1/2"
        />
        <input
          type="text"
          placeholder="Search here"
          className="h-10 active:outline-none focus:outline-none gap-2.5 w-[24rem] bg-transparent  text-white text-sm pl-11 pr-4"
        />
      </div>
      <div className="flex gap-4 items-center cursor-pointer">
        <div >
          <div className="text-white text-lg font-normal">Fagbohun Victor</div>
          <div className="text-teal-600 text-base font-semibold ml-[60%]">Admin</div>
        </div>
        <img src={PROFILE_IMAGE} alt="profile" className="w-10 h-10 rounded-full object-cover" />
      </div>
    </div>
  );
}

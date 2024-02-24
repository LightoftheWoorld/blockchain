import React from "react";
import { HiOutlineSave } from "react-icons/hi";

export default function Overview() {
  return (
    <div className="text-white flex justify-between items-center">
      <div className="">
        <p className="text-sm text-neutral-500 tracking-tight font-normal">
          Mon 29 Jan, 2024
        </p>
        <h1 className="text-3xl font-medium tracking-tight">Overview</h1>
      </div>
      <div className="gap-2 flex w-28 h-10 justify-center bg-teal-600 rounded items-center">
        <p className="items-center justify-center font-medium text-base">Export</p>
        <HiOutlineSave fontSize={18} />
      </div>
    </div>
  );
}

import React, { useState } from "react";
import {
  HiArrowNarrowRight,
  HiCheck,
  HiChevronLeft,
  HiChevronRight,
} from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import Carousel from "./Carousel";
import { Data } from "../data/dummydata";

export function VotersWelcome() {
  const navigate = useNavigate();
  return (
    <div className="mt-[220px] flex flex-col items-center">
      <p className="text-white font-bold text-[77px]">Welcome James</p>
      <p className="text-neutral-500 text-[35px] font-normal">
        Let's walk you through the voting process
      </p>
      <button
        onClick={() => navigate("info")}
        className="flex gap-2 items-center w-32 h-14 bg-teal-600 justify-center mt-[220px]"
      >
        Next <HiArrowNarrowRight />
      </button>
    </div>
  );
}

export function ElectionInfo() {
  const navigate = useNavigate();
  return (
    <div className="mt-[220px] flex flex-col items-center">
      <p className="text-white font-bold text-[77px]">BUCC GENERAL ELECTIONS</p>
      <p className="text-neutral-500 text-[35px] font-normal">
        Time to choose your preferred candidate
      </p>
      <button
        onClick={() => {
          navigate("/voters/vote");
        }}
        className="flex gap-2 items-center w-32 h-14 bg-teal-600 justify-center mt-[220px]"
      >
        Next <HiArrowNarrowRight />
      </button>
    </div>
  );
}

export function Vote() {
  const previous = () => {
    if (currentIndex > 1) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const forward = () => {
    if (currentIndex < Data.length) {
      setCurrentIndex(currentIndex + 1);
    }
  };
  const [currentIndex, setCurrentIndex] = useState(0);
  const selectImage = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="mt-4 flex flex-col items-center">
      <p className="text-white font-bold text-[77px]">President</p>
      <div className="flex gap-20 justify-between my-[68px] items-center">
        <HiChevronLeft
          className="text-neutral-500 cursor-pointer"
          onClick={previous}
          size={120}
        />
        {Data.map((item, index) => (
          <div className="flex flex-col items-center">
            {index === currentIndex ? (
              <div className="w-32 h-32 items-center flex justify-center bg-teal-600 rounded-full">
                <HiCheck  size={70} />
              </div>
            ) : (
                <img
                    key={index}
                    src={item.image}
                    alt="candidate"
                    className={`rounded-full cursor-pointer w-32 h-32 ${
                    index === currentIndex ? "border-4 border-teal-600" : ""
                    }`}
                    onClick={() => selectImage(index)}
                />
            )}

            <p className="text-xl font-bold mt-[26px]">
              {item.firstname.charAt(0).toUpperCase() + item.firstname.slice(1)}{" "}
              {item.lastname.charAt(0).toUpperCase() + item.lastname.slice(1)}
            </p>
            <p className="mt-[7px] text-neutral-500 text-base">{item.course}</p>
          </div>
        ))}
        <HiChevronRight
          className="text-neutral-500 cursor-pointer"
          onClick={forward}
          size={120}
        />
      </div>
      <p className="text-neutral-500 text-[35px] font-normal">
        choose your preferred candidate
      </p>
      <button className="flex gap-2 items-center w-32 h-14 bg-teal-600 justify-center mt-[120px]">
        Next <HiArrowNarrowRight />
      </button>
    </div>
  );
}

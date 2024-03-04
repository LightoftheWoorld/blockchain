import React, { useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

const Carousel = () => {
  //   const [currentIndex, setCurrentIndex] = useState(1);
  const data = [
    {
      image: "https://unsplash.it/640/425?image=30",
      firstname: "stephen",
      lastname: "dada",
      course: "SE"
    },
    {
      image: "https://unsplash.it/640/425?image=40",
      firstname: "victor",
      lastname: "fagbohun",
      course: "CS"
    },
    {
      image: "https://unsplash.it/640/425?image=50",
      firstname: "taiwo",
      lastname: "ariyo",
      course: "CS"
    },
    {
      image: "https://unsplash.it/640/425?image=10",
      firstname: "praise",
      lastname: "ibe",
      course: "CS"
    },
    {
      image: "https://unsplash.it/640/425?image=20",
      firstname: "iyunade",
      lastname: "victor",
      course: "CS"
    },
    {
      image: "https://unsplash.it/640/425?image=60",
      firstname: "boye",
      lastname: "odafe",
      course: "CS"
    },
  ];


  const previous = () => {
    if (currentIndex > 1) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const forward = () => {
    if (currentIndex < data.length) {
      setCurrentIndex(currentIndex + 1);
    }
  };
  const [currentIndex, setCurrentIndex] = useState(0);
  const selectImage = (index) => {
    setCurrentIndex(index);
    console.log(index);
  };

  return (
    <div className="flex gap-20 justify-between my-[68px] items-center">
      <HiChevronLeft
        className="text-neutral-500 cursor-pointer"
        onClick={previous}
        size={120}
      />
      {data.map((item, index) => (
        <div className="flex flex-col items-center">
          <img
            key={index}
            src={item.image}
            alt="candidate"
            className={`rounded-full cursor-pointer w-32 h-32 ${
              index === currentIndex ? "border-4 border-teal-600" : ""
            }`}
            onClick={() => selectImage(index)}
          />
          <p className="text-xl font-bold mt-[26px]">{item.firstname.charAt(0).toUpperCase() + item.firstname.slice(1)} {item.lastname.charAt(0).toUpperCase() + item.lastname.slice(1)}</p>
          <p className="mt-[7px] text-neutral-500 text-base">{item.course}</p>
        </div>
      ))}
      <HiChevronRight
        className="text-neutral-500 cursor-pointer"
        onClick={forward}
        size={120}
      />
    </div>
  );
};
export default Carousel;

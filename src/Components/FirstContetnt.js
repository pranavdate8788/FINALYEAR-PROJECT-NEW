import React from "react";
import Content from "./Content";
import { useState } from "react";
import { Link } from "react-router-dom";
function FirstContetnt() {
  const [showComponent, setShowComponent] = useState(false);

  return (
    <div className="home  h-auto bg-red-300 p-4 rounded-t-3xl  ">
      <div className="flex w-full  justify-between p-2 xs:items-center xs:font-semibold">
        <div className="flex-col text-lg  ">
          <h1>Results</h1>
          <div className="flex gap-4 text-semibold text-lg  xs:gap-2">
            <span className="flex flex-col  items-center">
              <h4>65</h4>
              <p>online</p>
            </span>
            <span className="flex flex-col  items-center">
              <h4>12</h4>
              <p>offline</p>
            </span>
            <span className="flex flex-col  items-center">
              <h4>88</h4>
              <p>Total</p>
            </span>
          </div>
        </div>
        <div className="flex flex-col text-lg xs:gap-2">
          <h3 className="text-right p-1 ">December , 15</h3>
          <div className="text-right p-1 flex gap-1 justify-around  ">
            <i className="fa-solid fa-list"></i>
            <i className="fa-solid fa-grip"></i>
          </div>
        </div>
      </div>
      <div className="flex overflow-y-hidden">
        <div className="relative w-max flex m-4 justify-center  ">
          <div className="w-44 h-44 rounded-full bg-orange-600 xs:w-32 xs:h-32 "></div>
          <div className="absolute text-center p-3 bottom-0 h-12  w-32 bg-lime-400 rounded-2xl xs:h-9 xs:w-24 xs:rounded-2xl xs:p-1    ">
            Student
          </div>
        </div>
        <div className="relative w-max flex m-4 justify-center  ">
          <div className="w-44 h-44 rounded-full bg-orange-600 xs:w-32 xs:h-32 "></div>
          <div className="absolute text-center p-3 bottom-0 h-12  w-32 bg-lime-400 rounded-2xl xs:h-9 xs:w-24 xs:rounded-2xl xs:p-1    ">
            Student
          </div>
        </div>
        <div className="relative w-max flex m-4 justify-center  ">
          <div className="w-44 h-44 rounded-full bg-orange-600 xs:w-32 xs:h-32 "></div>
          <div className="absolute text-center p-3 bottom-0 h-12  w-32 bg-lime-400 rounded-2xl xs:h-9 xs:w-24 xs:rounded-2xl xs:p-1    ">
            Student
          </div>
        </div>
      </div>
      <div className="flex flex-wrap mt-3 justify-center  ">
        <Link
          to={"/content"}
          className="h-auto p-4 w-80 m-3 bg-yellow-300 relative rounded-xl flex flex-col shadow-slate-600 "
        >
          <div className="flex justify-between">
            <span>May 5,2021</span>
            <i className="fa-solid fa-ellipsis-vertical"></i>
          </div>
          <div className="h-32 w-full mx-auto my-3 bg-purple-500 rounded-2xl"></div>
          <div className="flex justify-between">
            <div className="flex flex-col">
              <span>What is Design Thinking ?</span>
              <span>Tutor Name</span>
            </div>
            <div className="flex items-center gap-1 p-2 text-lg">
              <span>69</span>
              <i className="fa-regular fa-heart"></i>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default FirstContetnt;

import React from "react";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div className="flex p-1  w-full h-screen rounded-t-2xl ">
      <div className="w-1/3 flex flex-col h-auto items-center p-2 gap-4 overflow-y-hidden ">
        <h3 className="text-lg font-semibold">Profile Photo</h3>
        <div className="h-32 w-32 rounded-full bg-lime-300  relative ">
          <img
            className="rounded-full h-32 w-32 p-1"
            src="https://www.fakepersongenerator.com/Face/female/female20161025115339539.jpg"
            alt=""
          />
          <i class="fa-solid fa-user-pen absolute bottom-4 h-8 w-8 bg-slate-50 rounded-full p-2 right-0 "></i>
        </div>
        <div className="flex-col flex items-center text-lg gap-1 ">
          <label>UserName</label>
          <label>Teacher</label>
        </div>

        <div className="flex gap-12 text-lg">
          <div className="flex-col flex items-center ">
            <label>17</label>
            <label>Lectures</label>
          </div>
          <div className="flex-col flex items-center ">
            <label>1.2k</label>
            <label>Hours</label>
          </div>
          <div className="flex-col flex items-center ">
            <label>10</label>
            <label>Learners </label>
          </div>
        </div>
        <div className="flex flex-col items-center gap-2 text-lg p-2">
          <labe>Bio</labe>
          <p>
            I am passionate about developing web apps | Clean maintainable and
            scalable code | FrontEnd Performance Matters a LotCurrently getting
            hands on Mobile native and React native development I write here
            https://dev.to/ashwintelmore
          </p>
        </div>
        <div className=" text-lg w-11/12 gap-3 flex flex-col ">
          <h3>Something Heading</h3>
          <div className="flex flex-col">
            <input
              type="text"
              placeholder="Write something"
              className="rounded-lg p-1"></input>
            <label className="text-sm">Something content</label>
          </div>
        </div>
      </div>

      <div className="w-4/6 flex-col flex overflow-y-auto">
      <div className="flex sticky top-0 bg-white p-2 gap-2">
          {" "}
          <button className="rounded-2xl bg-amber-300 text-lg p-1">
            About
          </button>{" "}
      <Link to={"/allpost"} >  <button className="rounded-2xl bg-amber-300 text-lg p-1">
            All Post
          </button>{" "}</Link> 
        </div>
<div className="flex ">
      <div className="w-1/2  p-2 flex flex-col gap-3  h-auto ">
       
        <div className="p-2">
          <h3 className="font-bold text-lg">Heading</h3>
          <div className="gap-1 flex flex-wrap">
            <button className="rounded-2xl bg-amber-600 text-sm p-1">
              Web Development <i class="fa-solid fa-xmark"></i>{" "}
            </button>
            <button className="rounded-2xl bg-amber-600 text-sm p-1">
              React <i class="fa-solid fa-xmark"></i>{" "}
            </button>
            <button className="rounded-2xl bg-amber-600 text-sm p-1">
              Google <i class="fa-solid fa-xmark"></i>{" "}
            </button>
            <button className="rounded-2xl bg-amber-600 text-sm p-1">
              Mechanical engg <i class="fa-solid fa-xmark"></i>{" "}
            </button>
            <button className="rounded-2xl bg-amber-600 text-sm p-1">
              mathamatician <i class="fa-solid fa-xmark"></i>{" "}
            </button>
            <button className="rounded-2xl bg-amber-600 text-sm p-1">
              Web Development <i class="fa-solid fa-xmark"></i>{" "}
            </button>
          </div>
        </div>
        <div className="flex flex-col p-2 gap-2 ">
          <div className="flex  justify-between">
            <label className="font-bold text-lg">Education</label>
            <div>
              <button className="rounded-2xl bg-amber-600 text-sm p-1">
                Edit <i class="fa-solid fa-xmark"></i>{" "}
              </button>{" "}
              <button className="rounded-2xl bg-amber-600 text-sm p-1">
                Add <i class="fa-solid fa-xmark"></i>{" "}
              </button>{" "}
            </div>
          </div>
          <div className="flex flex-col p-2 gap-2">
            <div className="flex justify-between ">
              {" "}
              <h3 className="font-bold text-lg">heading</h3> <i class="fa-solid fa-pencil"></i>{" "}
            </div>
            <div className="flex justify-between ">
              {" "}
              <label>Location ! at company</label>{" "}
              <label>FEB2022-MAY2023</label>
            </div>
            <p>
              I am passionate about developing web apps | Clean maintainable and
              scalable code | FrontEnd Performance Matters a LotCurrently
              getting
            </p>
            <div className="flex justify-between ">
              {" "}
              <h3 className="font-bold text-lg">heading</h3> <i class="fa-solid fa-pencil"></i>{" "}
            </div>
            <div className="flex justify-between ">
              {" "}
              <label>Location ! at company</label>{" "}
              <label>FEB2022-MAY2023</label>
            </div>
            <p>
              I am passionate about developing web apps | Clean maintainable and
              scalable code | FrontEnd Performance Matters a LotCurrently
              getting
            </p>
          </div>
        </div>
        <div className="flex flex-col p-2 gap-2 ">
          <div className="flex  justify-between">
            <label className="font-bold text-lg">Work Experience</label>
            <div>
              <button className="rounded-2xl bg-amber-600 text-sm p-1">
                Edit <i class="fa-solid fa-xmark"></i>{" "}
              </button>{" "}
              <button className="rounded-2xl bg-amber-600 text-sm p-1">
                Add <i class="fa-solid fa-xmark"></i>{" "}
              </button>{" "}
            </div>
          </div>
          <div className="flex flex-col p-2 gap-2">
            <div className="flex justify-between ">
              {" "}
              <h3 className="font-bold text-lg">heading</h3> <i class="fa-solid fa-pencil"></i>{" "}
            </div>
            <div className="flex justify-between ">
              {" "}
              <label>Location ! at company</label>{" "}
              <label>FEB2022-MAY2023</label>
            </div>
            <p>
              I am passionate about developing web apps | Clean maintainable and
              scalable code | FrontEnd Performance Matters a LotCurrently
              getting
            </p>
            <div className="flex justify-between ">
              {" "}
              <h3 className="font-bold text-lg">heading</h3> <i class="fa-solid fa-pencil"></i>{" "}
            </div>
            <div className="flex justify-between ">
              {" "}
              <label>Location ! at company</label>{" "}
              <label>FEB2022-MAY2023</label>
            </div>
            <p>
              I am passionate about developing web apps | Clean maintainable and
              scalable code | FrontEnd Performance Matters a LotCurrently
              getting
            </p>
          </div>
        </div>
        <div className="flex flex-col p-2 gap-2 ">
          <div className="flex  justify-between">
            <label className="font-bold text-lg">Achievement</label>
            <div>
              <button className="rounded-2xl bg-amber-600 text-sm p-1">
                Edit <i class="fa-solid fa-xmark"></i>{" "}
              </button>{" "}
              <button className="rounded-2xl bg-amber-600 text-sm p-1">
                Add <i class="fa-solid fa-xmark"></i>{" "}
              </button>{" "}
            </div>
          </div>
          <div className="flex flex-col p-2 gap-2">
            <div className="flex justify-between ">
              {" "}
              <h3 className="font-bold text-lg">heading</h3> <i class="fa-solid fa-pencil"></i>{" "}
            </div>
            <div className="flex justify-between ">
              {" "}
              <label>Location ! at company</label>{" "}
              <label>FEB2022-MAY2023</label>
            </div>
            <p>
              I am passionate about developing web apps | Clean maintainable and
              scalable code | FrontEnd Performance Matters a LotCurrently
              getting
            </p>
            <div className="flex justify-between ">
              {" "}
              <h3 className="font-bold text-lg">heading</h3> <i class="fa-solid fa-pencil"></i>{" "}
            </div>
            <div className="flex justify-between ">
              {" "}
              <label>Location ! at company</label>{" "}
              <label>FEB2022-MAY2023</label>
            </div>
            <p>
              I am passionate about developing web apps | Clean maintainable and
              scalable code | FrontEnd Performance Matters a LotCurrently
              getting
            </p>
          </div>
        </div>
      </div>
      <div className="w-1/2  ">
        <div className="p-2 gap-2 flex flex-col">
          <h2 className="text-lg">Set Slot</h2>
         <div className="flex"> <label for="slots">Available :</label>
          <select placeholder="select option" name="slots" className="w-3/5">
            <option>Everyday</option>
            <option>Wekend</option>
            <option>Week days</option>
            <option>Not Available</option>
          </select></div>
        </div>
        <div className="w-11/12 p-1 m-2">
          <h4 className="text-md font-semibold">Select available dates</h4>
          <div className=" flex flex-wrap  bg-lime-300 p-1     rounded-2xl ">
            <span className="h-14 w-14 p-2 bg-slate-400 rounded-full">Mon</span>
            <span className="h-14 w-14 p-2 bg-slate-400 rounded-full">Tue</span>
            <span className="h-14 w-14 p-2 bg-slate-400 rounded-full">Wed</span>
            <span className="h-14 w-14 p-2 bg-slate-400 rounded-full">
              Thur
            </span>
            <span className="h-14 w-14 p-2 bg-slate-400 rounded-full">Fri</span>
            <span className="h-14 w-14 p-2 bg-slate-400 rounded-full">Sat</span>
            <span className="h-14 w-14 p-2 bg-slate-400 rounded-full">Sun</span>
            <button className="h-14 w-14 p-1 bg-slate-50 rounded-full">
              1
            </button>
            <button className="h-14 w-14 p-1 bg-slate-50 rounded-full">
              2
            </button>
            <button className="h-14 w-14 p-1 bg-slate-50 rounded-full">
              3
            </button>
            <button className="h-14 w-14 p-1 bg-slate-50 rounded-full">
              4
            </button>
            <button className="h-14 w-14 p-1 bg-slate-50 rounded-full">
              5
            </button>
            <button className="h-14 w-14 p-1 bg-slate-50 rounded-full">
              6
            </button>
            <button className="h-14 w-14 p-1 bg-slate-50 rounded-full">
              7
            </button>
            <button className="h-14 w-14 p-1 bg-slate-50 rounded-full">
              8
            </button>
            <button className="h-14 w-14 p-1 bg-slate-50 rounded-full">
              9
            </button>
            <button className="h-14 w-14 p-1 bg-slate-50 rounded-full">
              10
            </button>
            <button className="h-14 w-14 p-1 bg-slate-50 rounded-full">
              11
            </button>
            <button className="h-14 w-14 p-1 bg-slate-50 rounded-full">
              12
            </button>
            <button className="h-14 w-14 p-1 bg-slate-50 rounded-full">
              13
            </button>
            <button className="h-14 w-14 p-1 bg-slate-50 rounded-full">
              14
            </button>
            <button className="h-14 w-14 p-1 bg-slate-50 rounded-full">
              15
            </button>
            <button className="h-14 w-14 p-1 bg-slate-50 rounded-full">
              8
            </button>
            <button className="h-14 w-14 p-1 bg-slate-50 rounded-full">
              17
            </button>
            <button className="h-14 w-14 p-1 bg-slate-50 rounded-full">
              18
            </button>
            <button className="h-14 w-14 p-1 bg-slate-50 rounded-full">
              19
            </button>
            <button className="h-14 w-14 p-1 bg-slate-50 rounded-full">
              20
            </button>
            <button className="h-14 w-14 p-1 bg-slate-50 rounded-full">
              21
            </button>
            <button className="h-14 w-14 p-1 bg-slate-50 rounded-full">
              22
            </button>
            <button className="h-14 w-14 p-1 bg-slate-50 rounded-full">
              23
            </button>
            <button className="h-14 w-14 p-1 bg-slate-50 rounded-full">
              24
            </button>
            <button className="h-14 w-14 p-1 bg-slate-50 rounded-full">
              24
            </button>
            <button className="h-14 w-14 p-1 bg-slate-50 rounded-full">
              26
            </button>
            <button className="h-14 w-14 p-1 bg-slate-50 rounded-full">
              27
            </button>
            <button className="h-14 w-14 p-1 bg-slate-50 rounded-full">
              28
            </button>
            <button className="h-14 w-14 p-1 bg-slate-50 rounded-full">
              29
            </button>
            <button className="h-14 w-14 p-1 bg-slate-50 rounded-full">
              30
            </button>
            <button className="h-14 w-14 p-1 bg-slate-50 rounded-full">
              31
            </button>
          </div>
        </div>
        <div className="text-lg  flex flex-col gap-2 p-2 ">
          <h2>Select Time Range</h2>
          <div>
            {" "}
            From{" "}
            <button className="w-32 text-xs rounded-xl bg-gray-300 h-7">
              02:00Am
            </button>{" "}
            to{" "}
            <button className="w-32 text-xs rounded-xl bg-gray-300 h-7">
              02:00Pm
            </button>{" "}
            <button className="rounded-xl  w-20 h-7 bg-red-400">add</button>{" "}
          </div>
          <div className="w-full h-auto p-1 gap-1 flex flex-wrap ">
            <button className="w-52 text-xs rounded-xl bg-gray-300 h-7">
              10:00AM-11:00AM
            </button>
            <button className="w-52 text-xs rounded-xl  bg-gray-300 h-7">
              10:00AM-11:00AM
            </button>
            <button className="w-52 text-xs rounded-xl  bg-gray-300 h-7">
              10:00AM-11:00AM
            </button>
            <button className="w-52 text-xs rounded-xl  bg-gray-300 h-7">
              10:00AM-11:00AM
            </button>
          </div>
        </div>
        <div className="p-2">
          <h2>Recomendation</h2>
          <div className="flex items-center">
            <img
              className="rounded-full h-16 w-16 p-1"
              src="https://www.fakepersongenerator.com/Face/female/female20161025115339539.jpg"
              alt=""
            />
            <div>
              <h3>Ashwin Telmore</h3>
              <p>Something bio details</p>
            </div>
          </div>
          <div className="flex items-center">
            <img
              className="rounded-full h-16 w-16 p-1"
              src="https://www.fakepersongenerator.com/Face/female/female20161025115339539.jpg"
              alt=""
            />
            <div>
              <h3>Ashwin Telmore</h3>
              <p>Something bio details</p>
            </div>
          </div>
          <div className="flex items-center">
            <img
              className="rounded-full h-16 w-16 p-1"
              src="https://www.fakepersongenerator.com/Face/female/female20161025115339539.jpg"
              alt=""
            />
            <div>
              <h3>Ashwin Telmore</h3>
              <p>Something bio details</p>
            </div>
          </div>
        </div>
      </div> </div></div>
    </div>
  );
};

export default Profile;

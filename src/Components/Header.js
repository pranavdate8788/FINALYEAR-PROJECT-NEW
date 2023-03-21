import React from "react";
import Sidebar from "./Sidebar";
import { useState, useEffect } from "react";

const Header = () => {
const [theme, setTheme] = useState("light");
useEffect(()=> {
  if (theme === "dark"){
    document.documentElement.classList.add("dark");
  } else{
    document.documentElement.classList.remove("dark");
  }
},[theme]);
const handleThemeSwitch =()=>{
  setTheme(theme === "dark" ? "light" : "dark");
};


  const [isOpen, setIsOpen] = useState(false);
   
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };



  return (
    <div className="flex w-full bg-indigo-100 dark:bg-slate-800 dark:text-white  justify-between p-2 h-16    ">
      <div className="flex items-center gap-9 p-2 text-lg xs:gap-4  xs:w-full ">
        <div>
          <i
            className="fa-solid fa-bars cursor-pointer  "
            onClick={toggleSidebar}></i>
          <Sidebar isOpen={isOpen} toggle={toggleSidebar} />
        </div>

        <span className="mytutor">MyTutor</span> 
        <div className="mx-2 bg-white dark:bg-white dark:text-black  flex  p-2 w-96 justify-between items-center rounded-full xs:w-60 ">
          <h4>Search</h4>
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
      </div>

      <div className="flex justify-between items-center gap-7 p-3 text-lg  xs:hidden ">
        <i className="fa-regular fa-moon cursor-pointer" onClick={handleThemeSwitch}></i>

        <i className="fa-solid fa-circle-plus"></i>
        <i className="fa-solid fa-bell"></i>
        <div className=" flex justify-between items-center gap-2">
          <i className="fa-solid fa-user profile"></i>
          <span>TutorName</span>
        </div>
      </div>
    </div>
  );
};

export default Header;

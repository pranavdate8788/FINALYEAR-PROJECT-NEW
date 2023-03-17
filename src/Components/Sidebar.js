import React from "react";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <div className={isOpen ? "sidebar open" : "sidebar"}>
      <div className="flex justify-between items-center p-1">
        <h2 className="text-2xl ">My Tutor</h2>
        <i
          className="fa-solid fa-xmark cursor-pointer  text-2xl rounded-full"
          onClick={toggle}></i>
      </div>
      <div className="flex flex-col gap-3 list-none p-2">
        <div className="flex gap-2 items-center  ">
          {" "}
          <i className="fa-solid fa-moon"> </i>
            <label>Dark Mode</label>
         
        </div>
        <div className="flex gap-2 items-center" >
          <i className="fa-solid fa-bell"> </i>
            <label>Notifications</label>
          
        </div>
        <div className="flex gap-2 items-center ">
          {" "}
          <i className="fa-solid fa-circle-plus"> </i>
            <label>Upload</label>
          
        </div>
        <div className="flex gap-2 items-center" >
          <i className="fa-solid fa-gear gap-2"> </i>
            <label>Setting</label>
      
        </div>
      </div>
      <div className="flex bottom-2 absolute items-center gap-20 xs:gap-10">
      <img className="rounded-full h-14 w-14"
              src="https://www.fakepersongenerator.com/Face/female/female20161025115339539.jpg"
              alt="" />
            <label>TutorName</label>
      </div>
    </div>
  );
};

export default Sidebar;

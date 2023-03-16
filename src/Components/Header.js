import React from 'react'

export default function Header({openSidebar}) {
  return (
    <div className="flex w-full bg-slate-100  justify-between p-2 h-16    ">
    <div className="flex items-center gap-9 p-2 text-lg xs:gap-4  xs:w-full ">
          <i className="fa-solid fa-bars cursor-pointer"  onClick={openSidebar}></i>
          <span className="mytutor">MyTutor</span>
          <div className="mx-2 bg-slate-300  flex  p-2 w-96 justify-between items-center rounded-full xs:w-60 ">
            <h4>Search</h4>
            <i className="fa-solid fa-magnifying-glass"></i>
          </div> 
        </div>

        <div className="flex justify-between items-center gap-7 p-3 text-lg  xs:hidden ">
          <i
            className="fa-regular fa-moon"
             ></i>

          <i className="fa-solid fa-circle-plus"></i>
          <i className="fa-solid fa-bell"></i>
          <div className=" flex justify-between items-center gap-2">
          <i className="fa-solid fa-user profile"></i>
          <span>TutorName</span></div>
        </div>
     </div>
  )
}

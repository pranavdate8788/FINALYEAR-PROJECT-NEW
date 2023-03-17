import React from 'react'
export default function VerticalNav() {
  return (
    <div  className=" footer w-16 text-lg flex flex-col xs:bg-orange-100    xs:h-14 xs:p-1 xs:sticky xs:absolute xs:bottom-0    ">
    <div className="flex flex-col items-center p-8 gap-10   xs:flex xs:p-2 xs:gap-2 xs:flex-row  xs:items-center  xs:justify-evenly  ">
      <i className=" bg-slate-400 p-2 rounded-full fa-solid fa-house house"></i>
      <i className=" fa-solid fa-comment"></i>
      <i className=" fa-solid fa-calendar-days" ></i>
      <i className=" fa-sharp fa-solid fa-gear"></i>
    </div>
  </div>
  )
}

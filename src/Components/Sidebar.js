import React from 'react'

function Sidebar({sidebar}) {
  return (
    <>
    
    <div className={sidebar?"sidebar sidebar--open":"sidebar"} >
               <h1 className="p-3 text-xl">My Tutor</h1>
            <li className="list-none "><i className="fa-solid fa-moon"></i>Dark mode</li>
            <li className="list-none "><i className="fa-solid fa-bell"></i>Notification</li>
            <li className="list-none "><i className="fa-solid fa-calendar-days"></i>Calender</li>
            <li className="list-none "><i className="fa-solid fa-gear"></i>Setting</li>
         
    </div>
    </>
  )
}

export default Sidebar
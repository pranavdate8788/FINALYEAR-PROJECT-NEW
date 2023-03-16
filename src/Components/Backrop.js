import React from 'react'

function Backrop({sidebar,closeSidebar}) {
  return (
    <div className={sidebar?"backrop backrop--open":"backrop"} >
        <i className="fa-solid fa-xmark top-2 absolute p-1 right-1 text-3xl rounded-full h-8 w-8 cursor-pointer xs:text-lg " onClick={closeSidebar}></i>
    </div>
  )
}

export default Backrop
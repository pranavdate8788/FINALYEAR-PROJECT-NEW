import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Backrop from "./Backrop";
import Profile from "./Profile";

function DropdownProfile() {
  return (
    <>
    <Router>
      <Routes>
      <Route path="/" element={<Backrop/>} />
      <Route path="/profile" element={<Profile/>} />
      </Routes>

    </Router>
  </>
 
  );
}

export default DropdownProfile;

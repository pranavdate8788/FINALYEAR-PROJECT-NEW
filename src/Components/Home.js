import React from "react";
import Content from "./Content";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import FirstContetnt from "./FirstContetnt";

export default function Home() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<FirstContetnt />} />
          <Route path="/content" element={<Content />} />
        </Routes>
      </Router>
    </>
  );
}

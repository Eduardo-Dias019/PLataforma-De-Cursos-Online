import React from "react";

import { Route, Routes, BrowserRouter } from "react-router-dom";

// pages
import InitialPage from "./pages/InitialPage/index";

const RoutesNavegate = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<InitialPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default RoutesNavegate;

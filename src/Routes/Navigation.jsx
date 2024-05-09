import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "../Pages/Home/Home";


export default function Navigation() {
  
  return (
    <Router>
      <Routes>
        
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/" element={<Home />} />
        {/* <Route path="/accounts" element={<AccountsPage />} />
        <Route path="/dashboard" element={<DashHome />} />
        <Route path="/college" element={<College />} />
        <Route path="/college/:collegeId" element={<CollegeDetail />} /> */}

      </Routes>
    </Router>
  );
}
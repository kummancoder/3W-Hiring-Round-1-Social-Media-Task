import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import UserForm from "./components/UserForm";
import Dashboard from "./components/Dashboard";

const App = () => {
  return (
    <div className="w-full bg-[#FCFCFC] h-screen">
      <div className="w-full shadow-md">
        <Navbar />
      </div>

      <Routes>
        <Route path="/" element={<UserForm />} />{" "}
        <Route path="/upload" element={<UserForm />} />{" "}
        <Route path="/dashboard" element={<Dashboard />} />{" "}
      </Routes>
    </div>
  );
};

export default App;

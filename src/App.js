import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login.jsx";
import SignUp from "./components/signUp.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

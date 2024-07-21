import React from "react";
import Index from "./interfaces";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from "./components/register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/Register" element={<Register/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

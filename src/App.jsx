import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
function App() {
  return (
    <main>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </main>
  );
}

export default App;

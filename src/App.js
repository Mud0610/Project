import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import AddCard from "./components/AddCard";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-card" element={<AddCard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

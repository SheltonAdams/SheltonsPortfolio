import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import React from "react";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          {/* <Route exact path="/About" element={<About />} />
          <Route exact path="/Contact" element={<Contact />} /> */}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

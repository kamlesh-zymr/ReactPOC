import "./App.css";
import { Routes, Switch, Route } from "react-router-dom";
import { Suspense } from "react";
import Contact from "./components/Pages/Contact";
import Services from "./components/Pages/Services";
import About from "./components/Pages/About";
import Home from "./components/Pages/Home";
import Login from "./components/Login/Login";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;

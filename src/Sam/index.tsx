import Food from "./food";
import TOC from "./TOC";
import Intro from "./intro";
import { Route, Routes, Navigate } from "react-router";
import "./index.css";
import Emma from "./emma";



function Sam() {
    return (
      <div>
        <h1 className="wd-header-text center"> Happy National Boyfriend Day!</h1>
        <h2 className="center-plain wd-header-text-4"> I love you! </h2>
        <TOC />
        <Routes>
        <Route path="/" element={<Navigate to="/Sam" />} />
        <Route path="Emma" element={<Emma />} />
        <Route path="Intro" element={<Intro />} />
        <Route path="Food" element={<Food />} />
        </Routes>
      </div>
  
      
    );
  }
  export default Sam;
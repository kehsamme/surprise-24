// import React from 'react';
// import logo from './logo.svg';
// import Food from './Sam/food';
import './App.css';
import Sam from './Sam';
import { HashRouter, Route, Routes, Navigate} from "react-router-dom";
import "./index.css";



export default function App() {
  return (
    <HashRouter>
    <div>
    <Routes>
        <Route path="/" element={<Navigate to="Sam" />} />          
        <Route path="/Sam/*" element={<Sam />} />
      </Routes>
    </div>
    </HashRouter>
  );
}

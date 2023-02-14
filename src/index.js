import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Share1 from './components/Share1';
import Share2 from './components/Share2';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='share/1' element={<Share1 />} />
      <Route path='share/2' element={<Share2 />} />
    </Routes>
  </BrowserRouter>
);



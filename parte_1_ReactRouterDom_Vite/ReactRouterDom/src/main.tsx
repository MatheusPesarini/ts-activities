import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.css';

import { Home } from "./components/Home";
import { About } from "./components/About";
import { Menu } from "./components/Menu"

import { BrowserRouter, Routes, Route } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
        <Menu />
        <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/about"} element={<About />} />
        </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
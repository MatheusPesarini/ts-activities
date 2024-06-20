import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.css';

import { Home } from "./components/Home";
import { About } from "./components/About";
import { Menu } from "./components/Menu"
import { Post } from "./components/Posts"

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Redirect} from "./components/Redirect";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
        <Menu />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/posts" element={<Post />} />
            {/*<Route path="/posts/:id" element={<Post />} />*/}
            <Route path="/posts" element={<Post />} />
                <Route path=":id" element={<Post />} />
            <Route />
            <Route path="/redirect" element={<Redirect />} />
            <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);

import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.scss';
import Layout from './Layout'
import Home from './routes/home'
import About from './routes/about'
import Contributions from './routes/contributions'
import Contact from './routes/contact'
import Technologies from './routes/technologies';

export default function App() {

  return (
    <div className='main-container'>
      <Routes>
        <Route path='/' element={<Layout /> }>
          <Route index element={<Home />} />
          <Route path='aboutme' element={<About />} />
          <Route path='contributions' element={<Contributions />} />
          <Route path='contact' element={<Contact />} />
          <Route path='technologies' element={<Technologies />} />
        </Route>
    </Routes>
    </div>
  );
}

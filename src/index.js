import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage';
import FilmDisplay from './pages/FilmDisplay/FilmDisplay';
import FilmDetails from './pages/FilmDetails/FilmDetails';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='' element={<Homepage />} />
      <Route path='/film/:id/display' element={<FilmDisplay />} />
      <Route path='/film/:id/details' element={<FilmDetails />} />
    </Routes>
  </BrowserRouter>
);
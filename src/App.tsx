import React from 'react';
import './App.css';
import { Homepage } from './Components/Homepage/Homepage';
import { Route, Routes } from 'react-router-dom';
import { Cv } from './Components/CV/Cv';
function App() {
  return (
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/cv' element={<Cv />} />
    </Routes>
  );
}

export default App;

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import useIsLaptop from './useIsLaptop';

const App = () => {
  const isLaptop = useIsLaptop();

  return (
    <div>
      {isLaptop ? (
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='projects' element={<Projects />} />
          <Route path='contact' element={<Contact />} />
        </Routes>
      ) : (
        <div className="h-screen w-screen flex flex-col justify-center items-center p-4 bg-gray-100 text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Screen Too Small</h1>
          <p className="text-lg text-gray-600">Please use a laptop or larger screen to view this folio.</p>
        </div>
      )}
    </div>
  );
};

export default App;

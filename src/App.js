import React from 'react';
import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context.';
import Home from './Pages/Home';

import Navbar from './Components/LandingPage/Navbar';


function App() {
  return (
    // <ChakraProvider>
      <AppProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </AppProvider>
    //  </ChakraProvider>
  );
}

export default App;

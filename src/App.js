import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

import Home from './pages/Home';
import Map from './pages/Map';
import Contact from './pages/Contact';
import About from './pages/About';

import SummaryContextProvider from './contexts/SummaryContext';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <main className="main">
          <div className="container">
            <SummaryContextProvider>
              <Route exact path="/" component={Home} global={global} />
              <Route path="/contact" component={Contact} />
              <Route path="/about" component={About} />
            </SummaryContextProvider>
          </div>
          <SummaryContextProvider>
            <Route path="/map" component={Map} />
          </SummaryContextProvider>
        </main>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default App;

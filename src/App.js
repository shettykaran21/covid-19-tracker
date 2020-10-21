import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

import Home from './pages/Home';
import MyMap from './pages/MyMap';
import Contact from './pages/Contact';
import About from './pages/About';

import SummaryContextProvider from './contexts/SummaryContext';

import './App.css';

const App = () => {
  return (
    <SummaryContextProvider>
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <main className="main">
            <div className="container">
              <Route exact path="/" component={Home} global={global} />
              <Route path="/map" component={MyMap} />
              <Route path="/contact" component={Contact} />
              <Route path="/about" component={About} />
            </div>
          </main>
        </BrowserRouter>
        <Footer />
      </div>
    </SummaryContextProvider>
  );
};

export default App;

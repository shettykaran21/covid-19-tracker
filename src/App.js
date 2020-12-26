import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

import Home from './pages/Home';
import Map from './pages/Map';
import Analytics from './pages/Analytics';

import SummaryContextProvider from './contexts/SummaryContext';
import DayOneContextProvider from './contexts/DayOneContext';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <main className="main">
          <div className="container">
            <SummaryContextProvider>
              <DayOneContextProvider>
                <Route exact path="/" component={Home} global={global} />
              </DayOneContextProvider>
              <Route path="/analytics" component={Analytics} />
            </SummaryContextProvider>
          </div>
          <SummaryContextProvider>
            <Route path="/map" component={Map} />
          </SummaryContextProvider>
          {/* <Route path="/:slug" component={} /> */}
        </main>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default App;

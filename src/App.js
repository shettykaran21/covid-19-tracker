import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import Container from './components/Container/Container';

import Home from './pages/Home';
import Map from './pages/Map';
import Analytics from './pages/Analytics';
import AnalyticsCountry from './pages/AnalyticsCountry';

import SummaryContextProvider from './contexts/SummaryContext';
import DayOneContextProvider from './contexts/DayOneContext';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Main>
          <Container>
            <SummaryContextProvider>
              <DayOneContextProvider>
                <Route exact path="/" component={Home} global={global} />
              </DayOneContextProvider>
              <Route exact path="/analytics" component={Analytics} />
              <Route
                exact
                path="/analytics/:slug"
                component={AnalyticsCountry}
              />
            </SummaryContextProvider>
          </Container>
          <SummaryContextProvider>
            <Route path="/map" component={Map} />
          </SummaryContextProvider>
        </Main>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default App;

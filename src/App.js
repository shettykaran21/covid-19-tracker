import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

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
import AboutCovid19 from './pages/AboutCovid19';
import FlattenTheCurve from './pages/FlattenTheCurve';

const App = () => {
  return (
    <div className="App">
      <SummaryContextProvider>
        <DayOneContextProvider>
          <BrowserRouter>
            <Navbar />

            <Switch>
              <Main>
                <Container>
                  <Route exact path="/" component={Home} global={global} />
                  <Route exact path="/analytics" component={Analytics} />
                  <Route
                    exact
                    path="/analytics/:slug"
                    component={AnalyticsCountry}
                  />
                  <Route path="/about-covid-19" component={AboutCovid19} />
                  <Route
                    path="/flatten-the-curve"
                    component={FlattenTheCurve}
                  />
                </Container>
                <Route path="/map" component={Map} />
              </Main>
            </Switch>

            <Footer />
          </BrowserRouter>
        </DayOneContextProvider>
      </SummaryContextProvider>
    </div>
  );
};

export default App;

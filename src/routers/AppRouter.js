import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import AboutPage from '../pages/AboutPage'
import ServicesPage from '../pages/ServicesPage'
import NotFoundPage from '../pages/NotFoundPage'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const AppRouter = () => (
  <Router>
    <Navigation />
      <Switch>
        <Route path="/" exact component={ HomePage } />
        <Route path="/about" component={ AboutPage } />
        <Route path="/services" component={ ServicesPage } />
        <Route component={ NotFoundPage } />
      </Switch>
    <Footer />
  </Router>
)

export default AppRouter

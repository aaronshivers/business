import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import AboutPage from '../pages/AboutPage'
import ServicesPage from '../pages/ServicesPage'
import ContactPage from '../pages/ContactPage'
import Portfolio1Page from '../pages/Portfolio1Page'
import Portfolio2Page from '../pages/Portfolio2Page'
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
        <Route path="/contact" component={ ContactPage } />
        <Route path="/portfolio-1-col" component={ Portfolio1Page } />
        <Route path="/portfolio-2-col" component={ Portfolio2Page } />
        <Route component={ NotFoundPage } />
      </Switch>
    <Footer />
  </Router>
)

export default AppRouter

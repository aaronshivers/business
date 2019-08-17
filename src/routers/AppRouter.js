import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import AboutPage from '../pages/AboutPage'
import ServicesPage from '../pages/ServicesPage'
import ContactPage from '../pages/ContactPage'
import Portfolio1Page from '../pages/Portfolio1Page'
import Portfolio2Page from '../pages/Portfolio2Page'
import Portfolio3Page from '../pages/Portfolio3Page'
import Portfolio4Page from '../pages/Portfolio4Page'
import PortfolioItemPage from '../pages/PortfolioItemPage'
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
        <Route path="/portfolio-3-col" component={ Portfolio3Page } />
        <Route path="/portfolio-4-col" component={ Portfolio4Page } />
        <Route path="/portfolio-item" component={ PortfolioItemPage } />
        <Route component={ NotFoundPage } />
      </Switch>
    <Footer />
  </Router>
)

export default AppRouter

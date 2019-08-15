import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import AboutPage from '../pages/AboutPage'
import NotFoundPage from '../pages/NotFoundPage'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const AppRouter = () => (
  <Router>
    <Navigation />
      <Route path="/" exact component={ HomePage } />
      <Route path="/about" component={ AboutPage } />
      <Route component={ NotFoundPage } />
    <Footer />
  </Router>
)

export default AppRouter

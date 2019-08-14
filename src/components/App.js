import React from 'react'
import { Container } from 'react-bootstrap'
import Navigation from './Navigation'
import Header from './Header'
import Portfolio from './Portfolio'
import Features from './Features'
import Action from './Action'
import Footer from './Footer'
import Marketing from './Marketing'

const App = () => (
  <>
    <Navigation />
    <Header />
    <Container>
      <h1 className="my-4">Welcome to My Business</h1>
      <Marketing />
      <Portfolio />
      <Features />
      <hr />
      <Action />
    </Container>
    <Footer />
  </>
)

export default App

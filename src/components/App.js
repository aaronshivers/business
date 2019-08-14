import React from 'react'
import { Container } from 'react-bootstrap'
import Navigation from './Navigation'
import Header from './Header'
import Portfolio from './Portfolio'
import Features from './Features'
import Action from './Action'

const App = () => (
  <div>
    <Navigation />
    <Header />
    <Container>
      <h1 className="my-4">Welcome to My Business</h1>
      <Portfolio />
      <Features />
      <hr />
      <Action />
      <h1 className="display-1 text-center">business</h1>
    </Container>
  </div>
)

export default App

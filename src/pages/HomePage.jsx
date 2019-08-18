import React from 'react'
import { Container } from 'react-bootstrap'
import Header from '../components/Header'
import Heading from '../components/Heading'
import Portfolio from '../components/Portfolio'
import Features from '../components/Features'
import Action from '../components/Action'
import Marketing from '../components/Marketing'

const App = () => (
  <>
    <Header />
    <Container>
      <Heading heading="welcome to my business" />
      <Marketing />
      <Portfolio />
      <Features />
      <hr />
      <Action />
    </Container>
  </>
)

export default App

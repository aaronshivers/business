import React, { useState } from 'react'
import { Col, Form, Button } from 'react-bootstrap'

const ContactForm = () => {
  const [ validated, setValidated ] = useState(false)
  const [ name, setName ] = useState('')
  const [ phoneNumber, setPhoneNumber ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ message, setMessage ] = useState('')

  const handleFormSubmit = e => {
    e.preventDefault()
    const form = e.currentTarget

    if (form.checkValidity() === false) {
      e.stopPropagation()
    }

    setValidated(true)
  }

  return (
    <Col lg={ 8 } className="mb-4">
      <h3>Send us a Message</h3>
      <Form noValidate validated={ validated } onSubmit={ handleFormSubmit }>
          <Form.Group controlId="name">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Full Name..."
              value={ name }
              onChange={ e => setName(e.target.value) }
            >
            </Form.Control>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Please enter your name.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="phoneNumber">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              required
              type="tel"
              placeholder="888-888-8888"
              pattern="^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$"
              value={ phoneNumber }
              onChange={ e => setPhoneNumber(e.target.value) }
            >
            </Form.Control>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Please enter your ten digit phone number.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              required
              type="email"
              placeholder="Email..."
              value={ email }
              onChange={ e => setEmail(e.target.value) }
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Please enter your email.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="message">
            <Form.Label>Message</Form.Label>
            <Form.Control
              required
              as="textarea"
              placeholder="Message..."
              value={ message }
              onChange={ e => setMessage(e.target.value) }
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Please enter a message.
            </Form.Control.Feedback>
          </Form.Group>
        <Button type="submit">Send Message</Button>
      </Form>
    </Col>
  )
}

export default ContactForm

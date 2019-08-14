import React from 'react'
import { Carousel } from 'react-bootstrap'

const CarouselContent = ({ image, imgAlt, heading, body }) => (
  <>
    <img
      className="d-block w-100"
      src={ image }
      alt={ imgAlt }
    />
    <Carousel.Caption>
      <h3>{ heading }</h3>
      <p>{ body }</p>
    </Carousel.Caption>
  </>
)

export default CarouselContent

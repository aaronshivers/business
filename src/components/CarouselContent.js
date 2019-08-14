import React from 'react'
import { Carousel, Image } from 'react-bootstrap'

const CarouselContent = ({ image, imgAlt, heading, body }) => (
  <>
    <Image
      className="d-block w-100 carousel-image"
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

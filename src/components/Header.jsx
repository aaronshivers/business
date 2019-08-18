import React, { useState } from 'react'
import { Carousel } from 'react-bootstrap'
import CarouselContent from './CarouselContent'
import img1 from '../images/header-1.jpg'
import img2 from '../images/header-2.jpg'
import img3 from '../images/header-3.jpg'

const headerData = [
  {
    image: img1,
    imgAlt: 'First Slide',
    heading: 'First slide label',
    body: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
  }, {
    image: img2,
    imgAlt: 'Second Slide',
    heading: 'Second slide label',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  }, {
    image: img3,
    imgAlt: 'Third Slide',
    heading: 'Third slide label',
    body: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.'
  }
]

const Header = () => {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(null)

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex)
    setDirection(e.direction)
  }

  return (
    <Carousel activeIndex={index} direction={direction} onSelect={handleSelect}>
      {
        headerData.map((item, i) => (
          <Carousel.Item key={i}>
            <CarouselContent {...item} />
          </Carousel.Item>
        ))
      }
    </Carousel>
  )
}

export default Header

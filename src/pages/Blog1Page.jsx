import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import BreadcrumbContainer from '../components/BreadcrumbContainer'
import Heading from '../components/Heading'
import Blog1Item from '../components/Blog1Item'
import PaginationContainer from '../components/PaginationContainer'
import img1 from '../images/portfolio-1.jpg'
import img2 from '../images/portfolio-2.jpg'
import img3 from '../images/portfolio-3.jpg'
import img4 from '../images/portfolio-4.jpg'
import img5 from '../images/portfolio-5.jpg'
import img6 from '../images/portfolio-6.jpg'
import img7 from '../images/portfolio-7.jpg'
import img8 from '../images/portfolio-8.jpg'
import img9 from '../images/portfolio-9.jpg'
import img10 from '../images/portfolio-10.jpg'
import img11 from '../images/portfolio-11.jpg'
import img12 from '../images/portfolio-12.jpg'

const blogData = [
  {
    image: img1,
    heading: 'blog one',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium veniam exercitationem expedita laborum at voluptate. Labore, voluptates totam at aut nemo deserunt rem magni pariatur quos perspiciatis atque eveniet unde.'
  }, {
    image: img2,
    heading: 'blog two',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium veniam exercitationem expedita laborum at voluptate. Labore, voluptates totam at aut nemo deserunt rem magni pariatur quos perspiciatis atque eveniet unde.'
  }, {
    image: img3,
    heading: 'blog three',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium veniam exercitationem expedita laborum at voluptate. Labore, voluptates totam at aut nemo deserunt rem magni pariatur quos perspiciatis atque eveniet unde.'
  }, {
    image: img4,
    heading: 'blog four',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium veniam exercitationem expedita laborum at voluptate. Labore, voluptates totam at aut nemo deserunt rem magni pariatur quos perspiciatis atque eveniet unde.'
  }, {
    image: img5,
    heading: 'blog five',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium veniam exercitationem expedita laborum at voluptate. Labore, voluptates totam at aut nemo deserunt rem magni pariatur quos perspiciatis atque eveniet unde.'
  }, {
    image: img6,
    heading: 'blog six',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium veniam exercitationem expedita laborum at voluptate. Labore, voluptates totam at aut nemo deserunt rem magni pariatur quos perspiciatis atque eveniet unde.'
  }, {
    image: img7,
    heading: 'blog seven',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium veniam exercitationem expedita laborum at voluptate. Labore, voluptates totam at aut nemo deserunt rem magni pariatur quos perspiciatis atque eveniet unde.'
  }, {
    image: img8,
    heading: 'blog eight',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium veniam exercitationem expedita laborum at voluptate. Labore, voluptates totam at aut nemo deserunt rem magni pariatur quos perspiciatis atque eveniet unde.'
  }, {
    image: img9,
    heading: 'blog nine',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium veniam exercitationem expedita laborum at voluptate. Labore, voluptates totam at aut nemo deserunt rem magni pariatur quos perspiciatis atque eveniet unde.'
  }, {
    image: img10,
    heading: 'blog ten',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium veniam exercitationem expedita laborum at voluptate. Labore, voluptates totam at aut nemo deserunt rem magni pariatur quos perspiciatis atque eveniet unde.'
  }, {
    image: img11,
    heading: 'blog eleven',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium veniam exercitationem expedita laborum at voluptate. Labore, voluptates totam at aut nemo deserunt rem magni pariatur quos perspiciatis atque eveniet unde.'
  }, {
    image: img12,
    heading: 'blog twelve',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium veniam exercitationem expedita laborum at voluptate. Labore, voluptates totam at aut nemo deserunt rem magni pariatur quos perspiciatis atque eveniet unde.'
  }
]

const Blog1Page = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [range] = useState(4)

  const getCurrentPage = page => {
    setCurrentPage(page)
  }

  return (
    <Container>
      <Heading heading="blog home one" subheading="subheading" />
      <BreadcrumbContainer location="blog home 1" />
      <Row>
        <Col md={8}>
          {
            blogData.map(({ image, heading, body }, i) => {
              const start = (currentPage - 1) * range
              const end = start + range
              return (
                i >= start
                && i < end
                && (
                  <Blog1Item
                    key={heading}
                    image={image}
                    heading={heading}
                    body={body}
                  />
                )
              )
            })
          }
        </Col>
      </Row>
      <PaginationContainer
        getCurrentPage={getCurrentPage}
        maxPages={Math.ceil(blogData.length / range)}
      />
    </Container>
  )
}

export default Blog1Page

import React from 'react'
import {
  Container, Row, Col, Image
} from 'react-bootstrap'
import BreadcrumbContainer from '../components/BreadcrumbContainer'
import Heading from '../components/Heading'
import RelatedProjects from '../components/RelatedProjects'
import img1 from '../images/portfolio-1.jpg'
import img2 from '../images/portfolio-2.jpg'
import img3 from '../images/portfolio-3.jpg'
import img4 from '../images/portfolio-4.jpg'

const portfolioData = [
  {
    image: img1,
    heading: 'project one',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium veniam exercitationem expedita laborum at voluptate. Labore, voluptates totam at aut nemo deserunt rem magni pariatur quos perspiciatis atque eveniet unde.'
  }, {
    image: img2,
    heading: 'project two',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium veniam exercitationem expedita laborum at voluptate. Labore, voluptates totam at aut nemo deserunt rem magni pariatur quos perspiciatis atque eveniet unde.'
  }, {
    image: img3,
    heading: 'project three',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium veniam exercitationem expedita laborum at voluptate. Labore, voluptates totam at aut nemo deserunt rem magni pariatur quos perspiciatis atque eveniet unde.'
  }, {
    image: img4,
    heading: 'project four',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium veniam exercitationem expedita laborum at voluptate. Labore, voluptates totam at aut nemo deserunt rem magni pariatur quos perspiciatis atque eveniet unde.'
  }
]

const PortfolioItemPage = () => (
  <Container>
    <Heading heading="portfolio item" subheading="subheading" />
    <BreadcrumbContainer location="portfolio item" />
    <Row>
      <Col md={8}>
        <Image src={img1} fluid />
      </Col>
      <Col md={4}>
        <h3 className="my-3 text-capitalize">project description</h3>
        <p>{ portfolioData[0].body }</p>
        <h3 className="my-3 text-capitalize">project details</h3>
        <ul>
          <li>Lorem Ipsum</li>
          <li>Dolor Sit Amet</li>
          <li>Consectetur</li>
          <li>Adipiscing Elit</li>
        </ul>
      </Col>
    </Row>
    <h3 className="my-3 text-capitalize">related projects</h3>
    <Row>
      {
        portfolioData.map(({ image }) => (
          <RelatedProjects key={image} image={image} />
        ))
      }
    </Row>
  </Container>
)

export default PortfolioItemPage

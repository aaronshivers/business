import React from 'react'
import { Container, Row } from 'react-bootstrap'
import BreadcrumbContainer from '../components/BreadcrumbContainer'
import Heading from '../components/Heading'
import Portfolio1Item from '../components/Portfolio1Item'
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
  }, {
    image: img5,
    heading: 'project five',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium veniam exercitationem expedita laborum at voluptate. Labore, voluptates totam at aut nemo deserunt rem magni pariatur quos perspiciatis atque eveniet unde.'
  }, {
    image: img6,
    heading: 'project six',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium veniam exercitationem expedita laborum at voluptate. Labore, voluptates totam at aut nemo deserunt rem magni pariatur quos perspiciatis atque eveniet unde.'
  }, {
    image: img7,
    heading: 'project seven',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium veniam exercitationem expedita laborum at voluptate. Labore, voluptates totam at aut nemo deserunt rem magni pariatur quos perspiciatis atque eveniet unde.'
  }, {
    image: img8,
    heading: 'project eight',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium veniam exercitationem expedita laborum at voluptate. Labore, voluptates totam at aut nemo deserunt rem magni pariatur quos perspiciatis atque eveniet unde.'
  }, {
    image: img9,
    heading: 'project nine',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium veniam exercitationem expedita laborum at voluptate. Labore, voluptates totam at aut nemo deserunt rem magni pariatur quos perspiciatis atque eveniet unde.'
  }, {
    image: img10,
    heading: 'project ten',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium veniam exercitationem expedita laborum at voluptate. Labore, voluptates totam at aut nemo deserunt rem magni pariatur quos perspiciatis atque eveniet unde.'
  }, {
    image: img11,
    heading: 'project eleven',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium veniam exercitationem expedita laborum at voluptate. Labore, voluptates totam at aut nemo deserunt rem magni pariatur quos perspiciatis atque eveniet unde.'
  }, {
    image: img12,
    heading: 'project twelve',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium veniam exercitationem expedita laborum at voluptate. Labore, voluptates totam at aut nemo deserunt rem magni pariatur quos perspiciatis atque eveniet unde.'
  }
]

const Portfolio1Page = () => (
  <Container>
    <Heading heading="portfolio 1" subheading="subheading" />
    <BreadcrumbContainer location="portfolio 1" />
    {
      portfolioData.map((item, i) => (
        <Portfolio1Item key={ i } { ...item } />
      ))
    }
    <PaginationContainer />
  </Container>
)

export default Portfolio1Page

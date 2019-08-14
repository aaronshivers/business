import React from 'react'
import { Row } from 'react-bootstrap'
import PortfolioItem from './PortfolioItem'
import img1 from '../images/portfolio-1.jpg'
import img2 from '../images/portfolio-2.jpg'
import img3 from '../images/portfolio-3.jpg'
import img4 from '../images/portfolio-4.jpg'
import img5 from '../images/portfolio-5.jpg'
import img6 from '../images/portfolio-6.jpg'

const portfolioData = [
  {
    image: img1,
    heading: 'Project One',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt, dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!'
  }, {
    image: img2,
    heading: 'Project Two',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt, dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!'
  }, {
    image: img3,
    heading: 'Project Three',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt, dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!'
  }, {
    image: img4,
    heading: 'Project Four',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt, dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!'
  }, {
    image: img5,
    heading: 'Project Five',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt, dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!'
  }, {
    image: img6,
    heading: 'Project Six',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt, dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!'
  }
]

const Portfolio = () => (
  <>
    <h2 className="text-capitalize">Portfolio Heading</h2>
    <Row>
      {
        portfolioData.map((item, i) => (
          <PortfolioItem key={ i } { ...item } />
        ))
      }
    </Row>
  </>
)

export default Portfolio

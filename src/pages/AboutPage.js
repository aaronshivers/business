import React from 'react'
import { Container, Breadcrumb, Row, Col, Image } from 'react-bootstrap'
import BreadcrumbContainer from '../components/BreadcrumbContainer'
import Heading from '../components/Heading'
import Team from '../components/Team'
import img1 from '../images/about-1.jpg'
import team1 from '../images/team-1.jpg'
import team2 from '../images/team-2.jpg'
import team3 from '../images/team-3.jpg'
import customer1 from '../images/customer-1.jpg'
import customer2 from '../images/customer-2.jpg'
import customer3 from '../images/customer-3.jpg'
import customer4 from '../images/customer-4.jpg'
import customer5 from '../images/customer-5.jpg'
import customer6 from '../images/customer-6.jpg'

const aboutData = [
  {
    team: [
      {
        image: team1,
        name: 'team member',
        position: 'position',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus aut mollitia eum ipsum fugiat odio officiis odit.',
        email: 'name@example.com'
      }, {
        image: team2,
        name: 'team member',
        position: 'position',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus aut mollitia eum ipsum fugiat odio officiis odit.',
        email: 'name@example.com'
      }, {
        image: team3,
        name: 'team member',
        position: 'position',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus aut mollitia eum ipsum fugiat odio officiis odit.',
        email: 'name@example.com'
      }
    ]
  }, {
    customers: [
      {
        image: customer1
      }, {
        image: customer2
      }, {
        image: customer3
      }, {
        image: customer4
      }, {
        image: customer5
      }, {
        image: customer6
      }
    ]
  }
]

const AboutPage = () => (
  <Container>
    <Heading heading="about" subheading="subheading" />
    <BreadcrumbContainer location="about" />
    <Row>
      <Col lg={ 6 }>
        <Image src={ img1 } fluid rounded className="mb-4" />
      </Col>
      <Col lg={ 6 }>
        <h2>About My Business</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed voluptate nihil eum consectetur similique? Consectetur, quod, incidunt, harum nisi dolores delectus reprehenderit voluptatem perferendis dicta dolorem non blanditiis ex fugiat.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, magni, aperiam vitae illum voluptatum aut sequi impedit non velit ab ea pariatur sint quidem corporis eveniet. Odit, temporibus reprehenderit dolorum!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, consequuntur, modi mollitia corporis ipsa voluptate corrupti eum ratione ex ea praesentium quibusdam? Aut, in eum facere corrupti necessitatibus perspiciatis quis?</p>
      </Col>
    </Row>
    <h2>Our Team</h2>
    <Row>
      {
        aboutData[0].team.map((member, i) => (
          <Team key={ i } { ...member } />
        ))
      }
    </Row>
    <h2>Our Customers</h2>
    <Row>
      {
        aboutData[1].customers.map(({ image }, i) => (
          <Col key={ i } lg={ 2 } sm={ 4 } className="mb-4">
            <Image fluid src={ image } />
          </Col>
        ))
      }
    </Row>
  </Container>
)

export default AboutPage

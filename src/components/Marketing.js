import React from 'react'
import { Row } from 'react-bootstrap'
import CardContainer from './CardContainer'

const marketingData = [
  {
    header: 'Card Title',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.'
  }, {
    header: 'Card Title',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis ipsam eos, nam perspiciatis natus commodi similique totam consectetur praesentium molestiae atque exercitationem ut consequuntur, sed eveniet, magni nostrum sint fuga.'
  }, {
    header: 'Card Title',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.'
  }
]

const Marketing = () => (
  <Row>
    {
      marketingData.map((item, i) => (
        <CardContainer key={ i } { ...item } />
      ))
    }
  </Row>
)

export default Marketing

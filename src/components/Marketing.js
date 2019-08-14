import React from 'react'
import { Row } from 'react-bootstrap'
import MarketingItem from './MarketingItem'

const marketingData = [
  {
    heading: 'Card Title',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.'
  }, {
    heading: 'Card Title',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis ipsam eos, nam perspiciatis natus commodi similique totam consectetur praesentium molestiae atque exercitationem ut consequuntur, sed eveniet, magni nostrum sint fuga.'
  }, {
    heading: 'Card Title',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.'
  }
]

const Marketing = () => (
  <Row>
    {
      marketingData.map((item, i) => (
        <MarketingItem key={ i } { ...item } />
      ))
    }
  </Row>
)

export default Marketing

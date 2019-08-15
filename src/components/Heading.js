import React from 'react'

const Heading = ({ heading, subheading }) => (
  <>
    <h1 className="mt-4 mb-3 text-capitalize">
    { heading } <small>{ subheading }</small>
    </h1>
  </>
)

export default Heading

import React, { useState } from 'react'
import { Pagination } from 'react-bootstrap'

const PaginationContainer = ({ getCurrentPage, maxPages }) => {
  const [ active, setActive ] = useState(1)
  let items = []

  const handlePageChange = number => {
    setActive(number)
    getCurrentPage(number)
  }

  for (let number = 1; number <= maxPages; number++) {
    items.push(
      <Pagination.Item
        key={ number }
        active={ number === active }
        onClick={ () => handlePageChange(number) }
      >
        { number }
      </Pagination.Item>
    )
  }

  return (
    <Pagination className="justify-content-center">{ items }</Pagination>
  )
}

export default PaginationContainer

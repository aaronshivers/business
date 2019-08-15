import React from 'react'
import { Breadcrumb } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const BreadcrumbContainer = ({ location }) => (
  <>
    <Breadcrumb>
      <LinkContainer to="/">
        <Breadcrumb.Item className="text-capitalize">home</Breadcrumb.Item>
      </LinkContainer>
      <Breadcrumb.Item className="text-capitalize" active>{ location }</Breadcrumb.Item>
    </Breadcrumb>
  </>
)

export default BreadcrumbContainer

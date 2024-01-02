import React from 'react'
import { Container, Navbar } from 'react-bootstrap'

function Header() {
  return (
    <div>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand className='mx-auto fw-bolder  ' href="#home">Contact Manager</Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
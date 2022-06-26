import Router from 'next/router'
import Link from 'next/link'
import { Navbar, Container, Nav } from 'react-bootstrap'

function Navigation() {
  return (
    <Navbar variant='dark' bg='dark' expand='lg'>
      <Container>
        <Link href='/' passHref>
          <Navbar.Brand>Employee</Navbar.Brand>
        </Link>

        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mx-auto gap-3'>
            <Link href='/' passHref>
              <Nav.Link>Home</Nav.Link>
            </Link>
            <Link href='/create' passHref>
              <Nav.Link
                onClick={() => {
                  Router.reload()
                  Router.push()
                }}>
                Create
              </Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation

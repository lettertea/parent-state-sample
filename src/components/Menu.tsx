import {Button, Container, Form, FormControl, Nav, Navbar, NavDropdown} from 'react-bootstrap'

const Menu = () => {
    return (

    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
            <Navbar.Brand href="/">import CS</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <NavDropdown title="Calculator" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="/ChildA">Conversions</NavDropdown.Item>
                        <NavDropdown.Item href="/ChildB">Computations</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Data Structures</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.4">Algorithms</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link href="#deets">More deets</Nav.Link>
                    <Nav.Link eventKey={2} href="#memes">
                        Dank memes
                    </Nav.Link>
                </Nav>
                <Form className="d-flex">
                    <FormControl
                        type="search"
                        placeholder="Search"
                        className="mr-2"
                        aria-label="Search"
                    />
                    <Button >Search</Button>
                </Form>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    )
}

export default Menu
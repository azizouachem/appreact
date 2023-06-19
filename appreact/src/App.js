
import './App.css';
import {Nav,Container,Navbar,NavDropdown,Carousel,Row,Col} from"react-bootstrap";
import"bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
function App() {
  return (
    <div className="App">
      <header>
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">TOOKBOB</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">SALES</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                TRENDY
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">AVAILABLE IN  </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                ABOUT US
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      </header>
      <main>
      <Container>
      <Row md={4}>
        <Col><Carousel>
      <Carousel.Item>
        <img 
          className="d-block w-100"
          src="/prd1.jpg"
          alt="prd1"
        />
        <Carousel.Caption>
          <h3>in stock now</h3>
          <p>25% DISCOUNT</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/prd2.webp"
          alt="prd2"
        />

        <Carousel.Caption>
          <h3>in stock now</h3>
          <p>25% DISCOUNT</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/prd4.jpg"
          alt="prd4"
        />

        <Carousel.Caption>
          <h3>in stock now</h3>
          <p>
            25% DISCOUNT
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
</Col>
        <Col xs={6}><Carousel>
      <Carousel.Item>
        <img 
          className="d-block w-100"
          src="/prd6.jpg"
          alt="prd6"
        />
        <Carousel.Caption>
          <h3>in stock now</h3>
          <p>25% DISCOUNT</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/prd2.webp"
          alt="prd2"
        />

        <Carousel.Caption>
          <h3>in stock now</h3>
          <p>25% DISCOUNT</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/prd4.jpg"
          alt="prd4"
        />

        <Carousel.Caption>
          <h3>in stock now</h3>
          <p>
            25% DISCOUNT
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel></Col>
        <Col><Carousel>
      <Carousel.Item>
        <img 
          className="d-block w-100"
          src="/prd3.webp"
          alt="prd3"
        />
        <Carousel.Caption>
          <h3>in stock now</h3>
          <p>25% DISCOUNT</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/prd2.webp"
          alt="prd2"
        />

        <Carousel.Caption>
          <h3>in stock now</h3>
          <p>25% DISCOUNT</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/prd4.jpg"
          alt="prd4"
        />

        <Carousel.Caption>
          <h3>in stock now</h3>
          <p>
            25% DISCOUNT
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel></Col>
      </Row>
    </Container>

      </main>
    </div>
  );
}

export default App;

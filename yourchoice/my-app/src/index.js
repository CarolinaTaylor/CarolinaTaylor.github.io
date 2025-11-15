import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import { Container, Image, Navbar, Nav, Row, Col } from 'react-bootstrap';
import { BorderBottom } from 'react-bootstrap-icons';

const TopMenu = () => (
    <Container id="topMenu" fluid className="py-3">
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="#home"><Image src="/main-logo.svg" width={200}/></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav>
              <Nav.Link href="#">Expert Advice</Nav.Link>
              <Nav.Link href="#">Destination</Nav.Link>
              <Nav.Link href="#">Thing To Do</Nav.Link>
              <Nav.Link href="#">Cruise & Land Packages</Nav.Link>
              <Nav.Link href="#">Getting Around</Nav.Link>
              <Nav.Link href="#">Where to Stay</Nav.Link>
              <Nav.Link href="#"> Blog</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
);
const CenterText = () => (
    <Row id="centerText" className="align-items-center justify-content-center">
      <Col xs={8} className="text-center"  >
        <h1>We Show Independent Travelers A Better Way to See Alaska</h1>
        <p>See Alaska's highlights without crowds or cookie cutter experiences</p>
        <Row id="button" className="align-content-center justify-content-center">
          <button className="btn"><a href="#" className="home-button button btn-secondary u-mt1">
            GET STARTED
          </a></button>
        </Row>
      </Col>
    </Row>
);
const BottomMenu = () => (
    <footer id="bottomMenu" className="footer mt-auto py-3">
      <Container>
        <Row>
          <Col>
            1
            <hr/>
            <Image src="/alaska-homepage-step1.jpg"></Image>
            </Col>
          <Col>
            Bar
            <hr/>
            Monday - Friday: From 11:00am to closing<br/>
            Saturday - Sunday: Not open
          </Col>
          <Col>
            Dinner
            <hr/>
            Monday - Friday: 5:00pm - 9:00pm<br/>
            Saturday - Sunday: Not open
          </Col>
        </Row>
      </Container>
    </footer>
);
const Alaska = () => (
    <div className="d-flex flex-column min-vh-100">
      <TopMenu />
      <CenterText/>

    </div>
);

ReactDOM.render(<Alaska />, document.getElementById('root'));
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import { Container, Image, Navbar, Nav, Row, Col } from 'react-bootstrap';
import { Instagram, Facebook, Twitter } from 'react-bootstrap-icons';

const TopMenu = () => (
    <Container id="topMenu" fluid className="py-3">
      <Navbar bg="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home"><Image src="/murphyslogowhite.png" width={200}/></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav>
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link href="#">About Us</Nav.Link>
              <Nav.Link href="#">St. Patrick&apos;s Day</Nav.Link>
              <Nav.Link href="#">To Go Ordering</Nav.Link>
              <Nav.Link href="#"><Instagram/></Nav.Link>
              <Nav.Link href="#"><Facebook/></Nav.Link>
              <Nav.Link href="#"><Twitter/></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
);

const CenterText = () => (
    <Row id="centerText" className="align-items-center justify-content-center">
      <Col xs={8} className="text-center">
        <h1>Now accepting reservations for St Patrick's Day</h1>
        <h1>Please call 808-531-0422 for reservations</h1>
        <h1>St Patrick's Day To-Go Orders can be ordered on our website menu.</h1>
      </Col>
    </Row>
);
const BottomMenu = () => (
    <footer id="bottomMenu" className="footer mt-auto py-3">
      <Container>
        <Row>
          <Col>
            Lunch
            <hr/>
            Monday - Friday: 11:00am - 2:30pm<br/>
            Saturday - Sunday: Not open
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

const Murphys = () => (
    <div className="d-flex flex-column min-vh-100">
      <TopMenu />
      <CenterText/>
      <BottomMenu/>
    </div>
);

ReactDOM.render(<Murphys />, document.getElementById('root'));

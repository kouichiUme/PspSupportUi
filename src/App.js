import React from 'react';
import logo from './logo.svg';
import LineChart from './LineChart'
import { Container, Row, Col } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav';
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const data = [
  [{ x: 0, y: 6 }, { x: 1, y: 9 }, { x: 2, y: 6 },
  { x: 3, y: 5 }, { x: 4, y: 2 }, { x: 6, y: 4 },
  { x: 7, y: 2 }, { x: 8, y: 5 }, { x: 9, y: 2 }]
];

function App() {
  return (<div className="App">
    <Breadcrumb>
      <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
        Library
  </Breadcrumb.Item>
      <Breadcrumb.Item active>Data</Breadcrumb.Item>
    </Breadcrumb>

    <Nav
      activeKey="/home"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
      <Nav.Item>
        <Nav.Link href="/home">Active</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="disabled" disabled>
          Disabled
    </Nav.Link>
      </Nav.Item>
    </Nav>
    <LineChart data={data} />
    <Container>
      <Row>
        <Col>1 of 2</Col>
      </Row>
    </Container>
  </div>
  );
}

export default App;

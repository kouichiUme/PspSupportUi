import React from 'react';
import logo from './logo.svg';
import LineChart from './LineChart'
import { Container, Row, Col } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav';
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const data = [
  [{ x: 0, y: 6 }, { x: 1, y: 9 }, { x: 2, y: 6 },{ x: 2, y: -3 },
  { x: 3, y: 5 }, { x: 4, y: 2 }, { x: 6, y: 4 },
  { x: 7, y: 2 }, { x: 8, y: 5 }, { x: 9, y: 2 }]
];


function detPoints(p1, p2, p3) {
  let result = 0

  // 1 
  result = 1 * p1.x * p3.y - 1 * p1.y * p2.x;
  // 2 
  result += p1.x * p2.y * 1 - 1 * p3.x * p1.y;
  // 
  result += p1.y * 1 * p3.x - p2.y * 1 * p3.x;

  return result;
}



function ConvexHull() {
  let points =
    data[0].sort((p, q) => { return p.x < q.x })
  points = data[0];
  // points.map(p => (console.log(p)));

  let convexHill = [];
  let point1 = { x: -5, y: 0 };
  let point2 = { x: -2, y: 2 };
  convexHill.push(point1);
  convexHill.push(point2);

  for (let p of points) {
    convexHill.push(p);
    let p1 = convexHill[convexHill.length - 1]
    let p2 = convexHill[convexHill.length - 2]
    let p3 = convexHill[convexHill.length - 3]
    let detLast3 = detPoints(p1, p2, p3);

    if (convexHill.length > 3 && detLast3 < 0) {
      convexHill.splice(-2, 1)
    }
  }

  return convexHill;

}


function App() {

  let c = ConvexHull();

  c.map(p => console.log(p))



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


import React from 'react';
import logo from './logo.svg';
import LineChart from './LineChart'
import { Container, Row, Col } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav';
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { timeThursday } from 'd3-time';


const data = [
  [{ x: 0, y: 6 }, { x: 1, y: 9 }, { x: 2, y: 6 },
  { x: 3, y: 5 }, { x: 4, y: 2 }, { x: 6, y: 4 },
  { x: 7, y: 2 }, { x: 8, y: 5 }, { x: 9, y: 2 }]
];


function detPoints(p1, p2, p3) {
  let result = 0


  // 1 p1.x p1.y
  // 1 p2.x p2.y
  // 1 p3.x p3.y
  result = 1 * p2.x * p3.y - p1.y * p2.x * 1;
  // 2 
  result += - (p1.x * 1 * p3.y) + (1 * p2.x * p1.x);
  // 
  result += p1.y * 1 * p3.x - (1 * p2.y * p3.x);

  return result;
}



function ConvexHullUpperHalf() {
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

function convexHullLowerHalf() {

}


//
function testBstree() {
  // priortity queue
  let priorityQueue = new BSTree("1", "1");
  priorityQueue.root = priorityQueue;


  // search
  let result = priorityQueue.search("1")
  console.log("key : %s , value : %s", result.key, result.value);

  // test add node
  priorityQueue.addNode(new BSTree("2", "2"))

  result = priorityQueue.search("2")

  console.log("search 2 key : %s , value : %s", result.key, result.value);


  result = priorityQueue.min();
  console.log("min key : %s , value : %s", result.key, result.value);

  result = priorityQueue.max();
  console.log("max key : %s , value : %s", result.key, result.value);


  result = priorityQueue.search("2")
  result = result.successor()
  console.log("successor key : %s , value : %s", result.key, result.value);

  result = priorityQueue.search("1")
  result = result.predescessor()
  console.log("predescessor key : %s , value : %s", result.key, result.value);

  result = priorityQueue.search("1")
  priorityQueue.deleteNode(result);
  result = priorityQueue.search("2")
  console.log("predescessor %s", result);

}

class SelfBalancedTree {

}






function findIntersection(lines) {

  let eventPointQueue = new BSTree()

  let stateStructure = new SelfBalancedTree();

  eventPointQueue.addNode();



  while ((p == eventPointQueue.pop()) !== null) {

    // ? selfBalanced treeがおかしい？
    handleEventPoint(eventPointQueue, stateStructure, p)

    // selfBalanced 

  }

}


//
function handleEventPoint(eventQueue, stateStructure, p) {

  let result = [];
  if (upPointOfLine(p) + containLineSegment(p) !== 0) {

  } else if (p) {
    result.push({ point: p, lines: [] })
    // if 
    findNewEvent(eventQueue, stateStructure, p)

  } else (lowerEndOfLine(p))
  {
 
    //then 
    deleteFrom(stateStructure, p)

  }

}

// 
function findNewEvent(eventPointQueue, stateStructure, p) {

  let s = stateStructure.getLeftNeibor(p);
  let s1 = stateStructure.getRightNeibor(p);
  // s
  if (hasIntersection(s, p)) {
    // 
    let intersectionPoint = intersection(s, s1)
    eventPointQueue.push(intersectionPoint);

    intersectionPoint = intersection()
  }

  if (hasIntersection(p, s1)) {

  }
}


function makeMonotone() {
  let priorityQueue = new BSTree()

  priorityQueue.addNode(new BSTree("1"))

  while (priorityQueue.pop() !== null) {

  }
}

// 

class BSTree {

  constructor(cKey, cValue) {
    this.left = null;
    this.right = null;
    this.parent = null;
    this.key = cKey;
    this.value = cValue;
    this.root = null;
  }

  // insert BSTree
  addNode(bsTree) {


    if (this.key > bsTree.key || this.key === bsTree.key) {
      if (this.left === null) {
        this.left = bsTree
        bsTree.parent = this;
      } else {
        // left 
        this.left.addNode(bsTree)
      }
    }

    if (this.key < bsTree.key) {
      if (this.right === null) {
        this.right = bsTree;
        bsTree.parent = this;
      } else {
        this.right.addNode(bsTree)
      }
    }
  }

  // 
  min() {
    let p = this
    //
    for (; p.left !== null; p = p.left) {

    }

    return p;

  }

  max() {
    let p = this

    for (; p.right !== null; p = p.right) {
    }
    return p;

  }

  successor() {

    if (this.right !== null) {
      return this.right.min();
    } else {
      // only smaller value is in tree
      // find node smallest max of tree 
      let p = this.parent !== null ? this.parent : this;
      let y = p;
      for (let x = this; p !== null && p.right === x;) {
        y = p;
        x = p;
        p = p.parent

      }
      return y;
    }

  }

  predescessor() {
    if (this.left !== null) {
      return this.left.max();
    } else {
      // only smaller value is in tree
      // find node biggest min of tree 
      let p = this.parent !== null ? this.parent : this;
      let y = p;
      for (let x = this; p !== null && p.left === x;) {
        y = p;
        x = p;
        p = p.parent

      }
      return y;
    }



  }



  // exchange u,v
  // u is inside of tree 
  // u will be replaced to v 
  transNode(u, v) {

    // exchange u and v 
    if (u.parent !== null) {
      if (u.parent.left === u) {
        u.parent.left = v
      } else {
        u.parent.right = v
      }
    } else {
      // u.parent is null root
      this.root = v;
    }
    if (v !== null) {
      v.parent = u.parent
    }

  }


  deleteNode(d) {

    // if there is no left (smaller node) then we can right node
    // d dont have smaller value
    // then concat parent and right node;
    if (d.left === null) {
      this.transNode(d, d.right);
      // also there is no right 
    } else if (d.right === null) {
      this.transNode(d, d.left);

      // we has both node;
      // then find sucessor of d.right and replace that against deleting node
    } else {
      // left is 
      let m = d.right.min();
      if (m.parent !== d) {
        this.transNode(m, m.right)
        m.right = d.right
        m.right.p = m
      }
      this.transNode(d, m);
      // 
      m.left = d.left
      m.left.parent = m

    }

  }


  // 




  // 
  pop() {
    let max = this.max()
    this.deleteNode(max)
    return max;
  }



  // Search tree 
  search(key) {
    if (this.key === key) {
      return this;
    }
    if (this.key > key) {
      if (this.left !== null) {
        return this.left.search(key)
      } else {
        return null;
      }
    }
    if (this.key < key) {
      if (this.right !== null) {
        return this.right.search(key)
      } else {
        return null
      }
    }
  };

};






function App() {

  let c = ConvexHullUpperHalf();

  let r = findIntersection();

  testBstree()

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


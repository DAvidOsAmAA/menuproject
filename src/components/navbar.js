import React, { useState } from "react";
import { Row } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const Nabar = ({filterBySearch})=>{
  const[SearchValue,setSearch]=useState("")
  const onSearch =()=>{
    filterBySearch(SearchValue)
    setSearch('')
  }
  return (
    <Row>
<Navbar bg="dark" expand="lg" className="px-4" variant="dark">
      <Container >
        <Navbar.Brand href="#">
            <div className="div" style={{color:'#b45b35'}}>New Cofe</div></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="text"
              placeholder="Search......"
              className="me-2"
              aria-label="Search"
              onChange={(e)=>setSearch(e.target.value)}
              value ={SearchValue}
            />
            <Button onClick={()=>onSearch("")} variant="outline-light">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </Row>
  );
}

export default Nabar;
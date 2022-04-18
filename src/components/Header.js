import React, { Component } from 'react'
import {Button, Container, FormControl, Navbar , Nav, Form, NavLink} from "react-bootstrap";
import logo from './Ресурс 1-100.jpg'
import NavbarToggle from "react-bootstrap/NavbarToggle";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Home from '../Pages/Home';
import About from '../Pages/About';
import Contacts from '../Pages/Contacts';
import Blog from '../Pages/Blog';
export default class Header extends Component {
    render() {
        return(
            <>
           <Navbar  collapseOnSelect expand="md" bg="dark" variant="dark">
               <Container>
                   <Navbar.Brand href="/">
                       <img
                           src={logo}
                           height="60"
                           width="60"
                           className="d-inline-block align-top"
                           alt="Logo"
                           />

                   </Navbar.Brand>
                   <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                   <Navbar.Collapse id="responsive-navbar-nav">
                       <Nav className="mr-auto">
                           <h3 style={{color:"White",marginRight:"25px"}}>Test</h3>
                           <NavLink href="/">Home</NavLink>
                            <NavLink href="/about">About us</NavLink>
                            <NavLink href="/contacts">Contacts</NavLink>
                            <NavLink href="/blog">Blog</NavLink>
                       </Nav>
                       <Form inline style={{position:'relative', right:'-600px'}} >
                           <FormControl
                               type="text"
                               placeholder="Search"
                               className="me-sm-5"
                               title="Wow"

                               />
                           <Button variant="outline-success" style={{color:"white",margin:"5px",marginLeft:"200px"}}>Search</Button>
                       </Form>
                   </Navbar.Collapse>
               </Container>
           </Navbar>

                <Router>
                    <Routes>
                        <Route path='/' element={<Home/>}/>
                        <Route path='/about' element={<About/>}/>
                        <Route path='/contacts' element={<Contacts/>}/>
                        <Route path='/blog' element={<Blog/>}/>
                    </Routes>
                </Router>
          </>

        )
    }
}
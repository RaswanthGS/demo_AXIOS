import React from 'react'
import { Navbar , Nav } from 'react-bootstrap'
import {NavLink} from 'react-router-dom'

const NavBarMenu = () => {
  return (
    <div>
        <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Products</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Nav className="me-auto">
            <NavLink className="show-products-nav" to='/'>Product</NavLink>
            <NavLink className="add-products-nav" to='/addproduct'>Add Product</NavLink>
          </Nav>
    </Navbar>
    </div>
  )
}

export default NavBarMenu
import React from "react";
import { FaEllipsisH, FaSearch, FaBars } from 'react-icons/fa';
import {  Navbar, Nav, NavDropdown } from "react-bootstrap";
import StyledButton from "../../StyledComponents/Button";

export default function Header() {
  return (
    <div>
      <Navbar  expand="lg" className="ps-3 pe-3 bgColor" >
          <Navbar.Brand href="#home">
            <img src="https://geeks-react.netlify.app/static/media/logo.e22c846d87ff5a1252df471397badc6d.svg" alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" children={<FaBars className="text-white" />}  />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="Browse" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Web Development</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Design
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Mobile App
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  IT Software
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  Marketing
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                    Music
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Landings" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1" className="disabled">Landings</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Courses
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Lead course
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  Request Access
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  Saas
                </NavDropdown.Item>
              </NavDropdown>
               <NavDropdown title="Pages" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Courses</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Paths
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Blog
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  Career
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  Specialty
                </NavDropdown.Item>
                <NavDropdown.Divider/>
                <NavDropdown.Item href="#action/3.4">
                  About
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  Help Center
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  Pricing
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  Compare plan
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  Contact
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Accounts" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1" className="disabled">Accounts</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Instructor
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Students
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  Admin
                </NavDropdown.Item>
                <NavDropdown.Divider/>
                <NavDropdown.Item href="#action/3.4">
                  Sign In
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  Sign Up
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  Forgot Password
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  Edit Profile
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  Security
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  Social Profiles
                </NavDropdown.Item>
              </NavDropdown>
              <div style={{cursor: "pointer", color:"white", marginTop:"10px"}}>
                <FaEllipsisH/>
              </div>
              <div style={{borderRadius:"6px", position:"relative", padding:"10px 4px", background:"#413C5E", color:"#A8A3B9", marginLeft:"10px"}}>
              <input type="search" style={{border:"none", background:"none",padding:"0px 0px 0px 30px", outline:"none", color:"white"}}   placeholder="Search Courses" />
              <FaSearch style={{position:"absolute", left:"3%", top:"30%"}}/>
             </div>
            </Nav>  
            
            <Nav className=" align-items-end">
                <div className="d-flex gap-2  mt-2">
                    <StyledButton className="me-2">Sign In</StyledButton>
                    <StyledButton type="purple">Sign In</StyledButton>   
                </div>           
            </Nav>
       
          </Navbar.Collapse>   
      </Navbar>
   
    </div>
  );
}

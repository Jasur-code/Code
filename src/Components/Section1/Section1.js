import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import { FaClock, FaVideo, FaUsers, FaTwitter} from 'react-icons/fa';
import {AiFillMail} from "react-icons/ai"
import {BsFacebook} from "react-icons/bs"
import StyledButton from "../../StyledComponents/Button";
 


export default function Section1() {
  return (
    <div className="bgColor">
        <Row className="p-5 m-0"> 
          <Col lg={6} md>
            <h1 className="display-4 fw-bold text-light">Become a Vanilla JavaScript Developer</h1>
            <p className="text-light">
              In this tutorial, we are going to learn about JavaScript (Vanilla
              JS) - for building incredible, powerful JavaScript applications.
            </p>
            <p className="text-secondary"> <FaClock className="text-warning" />  4 hours</p>
            <p className="text-secondary"> <FaVideo className="text-warning" />  12 videos</p>
            <p className="text-secondary"> <FaUsers className="text-warning" />  10,234 + Enrolled</p>
            <StyledButton>Watch Preview</StyledButton>
          </Col>
          <Col lg={6} className="mt-3">
              <Form className="bg-light p-4 rounded shadow w-100 ">
                <h3>Create Free Account</h3>
                <div className="d-flex gap-3  flex-wrap mt-4">
                <p className="pt-2 pb-2 ps-3 pe-3 rounded border border-secondary">
                  <AiFillMail/> Google
                </p>
                <p className="pt-2 pb-2 ps-3 pe-3 rounded border border-secondary">
                  <FaTwitter/> Twitter
                </p>
                <p className="pt-2 pb-2 ps-3 pe-3 rounded border border-secondary">
                  <BsFacebook/> Facebook
                </p>
               </div>
               <hr/>
                <input type="email" placeholder="email" className="w-100 p-2 rounded border border-secondary mt-4" style={{outline:"none"}}  />
                <input type="password" placeholder="password" className="w-100 p-2 rounded border border-secondary mt-3" style={{outline:"none"}}  />
                <StyledButton type="purple" className="w-100 mt-3">Start Courses for Free</StyledButton>
              </Form>
          </Col>
        </Row>
    </div>
  );
}

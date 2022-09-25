import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa'

export default function Footer() {
  return (
     <footer className='p-5'>
     <Row className='gap-5 justify-content-center mt-5'>
     <Col lg={3}>
            <img src="https://geeks-react.netlify.app/static/media/logo.e22c846d87ff5a1252df471397badc6d.svg" alt="" />
            <p className='mt-3'>Geek is feature-rich components and beautifully Bootstrap UIKit for developers, built with bootstrap responsive framework.</p>
            <div className='d-flex flex-wrap gap-2'>
                <FaFacebook className='text-secondary'/>
                <FaTwitter className='text-secondary'/>
                <FaLinkedin className='text-secondary'/>
            </div>
        </Col>
        <Col lg={2}>
             <h4 className='fw-bold'>Company</h4>
             <ul className=' p-0'>
                <li className='mt-1'><a href="hhh" className='text-secondary'>About</a></li>
                <li className='mt-1'><a href="hhh" className='text-secondary'>Pricing</a></li>
                <li className='mt-1'><a href="hhh" className='text-secondary'>Blog</a></li>
                <li className='mt-1'><a href="hhh" className='text-secondary'>Careers</a></li>
                <li className='mt-1'><a href="hhh" className='text-secondary'>Contact</a></li>
             </ul>
        </Col>

        <Col lg={2}>
             <h4 className='fw-bold'>Support</h4>
             <ul className=' p-0'>
                <li className='mt-1'><a href="hhh" className='text-secondary'>Help and Support</a></li>
                <li className='mt-1'><a href="hhh" className='text-secondary'>Become Instructor</a></li>
                <li className='mt-1'><a href="hhh" className='text-secondary'>Get the app</a></li>
                <li className='mt-1'><a href="hhh" className='text-secondary'>Faqs</a></li>
                <li className='mt-1'><a href="hhh" className='text-secondary'>Tutorial</a></li>
             </ul>
        </Col>

        <Col lg={2}>
        <h4>Get In Touch</h4>
            <p>339 McDermott Points Hettingerhaven, NV 15283</p>
            <p>Email: <a href="hh" className='spanColors'>support@geeksui.com</a></p>
            <p>Phone: <span className='fw-bold'>(000) 123 456 789</span></p>
        </Col>


     </Row>
    <hr className='fw-bold mt-4' />

        <div className='container mt-3'>
        <div className='d-flex justify-content-between flex-wrap'>
         <p className='text-secondary'>© 2022 Geeks-UI, Inc. All Rights Reserved</p>
         <div className='text-secondary d-flex gap-3 flex-wrap'>
            <a href="hh" className='text-secondary'>Privacy Policy</a>
            <a href="hh" className='text-secondary'>Cookie Notice</a>
            <a href="hh" className='text-secondary'>Do Not Sell My Personal Information</a>
            <a href="hh" className='text-secondary'>Terms of Use</a>
         </div>
       </div>
        </div>
     </footer>
  )
}

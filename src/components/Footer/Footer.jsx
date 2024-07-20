import React from 'react'
import logo from '../../assets/images/logo.png'
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import './footer.css'

const Footer = () => {
  return (
    <>
    <div className="bd-footer py-5 mt-5 bg-light">
      <div className="container py-5">
          <div className="row">
            <div className="col-md-3">
              <img src={logo} alt="logo" />
              <ul className='list-unstyled small text-muted'>
                <li><h3>Sectec 360</h3></li>
                <li>sectec provides wide range of services & solutions in
                    IT and sectec helps your business to grow! 
                </li>
                <li>Your solutions and services is our pririority!</li>
                <li>And Finally, We Fix You!</li>
              </ul>
            </div>
            <div className="col-md-3 services">
              <h5 className='mt-5 fw-bold'>Services</h5>
              <ul className='list-unstyled small text-muted'>
                <li>IT Services</li>
                <li>Cyber Security 
                </li>
                <li>Firewall Services</li>
                <li>Software Development</li>
                <li>Web Development</li>
                <li>Threat hunting</li>
                <li>Incident Analysis</li>
                <li>Penetration Testing</li>
              </ul>
            </div>
            <div className="col-md-3">
              <h5 className='mt-5 fw-bold'>Solutions</h5>
              <ul className='list-unstyled small text-muted'>
                <li>Cyber Security 
                </li>
                <li>Digital Transformation</li>
              </ul>
              <h5 className='mt-2 fw-bold'>Industry</h5>
              <ul className='list-unstyled small text-muted'>
                <li>Financial Services 
                </li>
                <li>Healthcare</li>
                <li>Retail</li>
                <li>Manufacturing</li>
              </ul>
            </div>
            <div className="col-md-3">
            <h5 className='mt-5 fw-bold'>You Reach, We Fix!</h5>
              <ul className='list-unstyled small text-muted'>
                <li className='mt-1'><MdEmail />    info@sectec360.com</li>
                <li className='mt-1'><FaPhoneAlt />  +91 8754746185</li>
              </ul>
            </div>
          </div>
      </div>
    </div>
    </>
  )
}

export default Footer
import React, { useState } from 'react'
import{  Link} from 'react-router-dom'
import './navbar.css'
import { Nav, Container } from 'react-bootstrap'
import {FaBars} from 'react-icons/fa'
import {ImCross} from 'react-icons/im'

function handleButtonClick() {
    // Load the page here
    window.location.href = 'https://profilio-haitam.vercel.app/Formations';
  } 
  function handleButtonClick1() {
    // Load the page here
    window.location.href = 'https://profilio-haitam.vercel.app/Expérience';
  } 
  function handleButtonClick2() {
    // Load the page here
    window.location.href = 'https://profilio-haitam.vercel.app/Projet';
  } 
  function handleButtonClick3() {
    // Load the page here
    window.location.href = 'https://profilio-haitam.vercel.app/Certication';
  } 
  function handleButtonClick4() {
    // Load the page here
    window.location.href = 'https://profilio-haitam.vercel.app/';
  } 

const Navbar = () => {

    const [Mobile,setMobile]= useState(false)

    return (
    <center>  <nav className="navbar"  >
          
           <center> 
          <ul className= {Mobile? "nav-links-mobile" : "nav-links"} onClick={() => setMobile(false)}>
                <Link to="/"  onClick={handleButtonClick4}> <li> Acceuil</li></Link>
                <Link to="/Formations"  onClick={handleButtonClick}> <li> Formations</li></Link>
                <Link to="/Expérience"  onClick={handleButtonClick1}> <li> Expérience</li></Link>
                <Link to="/Projet" onClick={handleButtonClick2} > <li> Projet</li></Link>
                <Link to="/Certication" onClick={handleButtonClick3}> <li> Certication</li></Link>

          </ul>
          </center>
          <button className='mobile-menu-icon' onClick={()=> setMobile(!Mobile)}>
                    {Mobile? < ImCross/> :   <FaBars />}
           
          </button>
       
      </nav>
      </center>
    )

}

export default Navbar
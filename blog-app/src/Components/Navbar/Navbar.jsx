import React from 'react'
import "./Navbar.css"
import {Link, useNavigate } from "react-router-dom"
import { CiSearch } from "react-icons/ci";
import { useState } from 'react';



const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  }
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if(searchQuery.trim() === '') return;
  navigate(`/search?type=category&Query=${searchQuery}`);
  setSearchQuery('')
  };

 
  
  return (
    <>
      <div className="navbar ">
        <div className="logo">
          <img src="./src/assets/Logo.png" alt="blog-page-logo-img-1" />
        </div>
        <div className="nav-left">
          <ul>
          <li><Link to={"/"} >Home</Link></li>
          <li><Link to={"/BlogPage"} >Blog</Link></li>
          <li><Link >SinglePost</Link></li>
          <li><Link >Pages</Link></li>
          <li><Link >Contact</Link></li>
          </ul>
        </div>
        <div className="nav-right">
          <div className="search">

   {/* search bar for filtered data !!!! functionality addition expexcted !!!! */ }
          <input type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search by Category" ></input> 
          <button  onClick={handleSearchSubmit}> 
          <CiSearch size={20}  /> { /*icon*/}
          </button>
          </div>
   {/* theme change switch  !!!! functionality addition expexcted !!!! */ }

         <img src="./src/assets/Swich.png" alt="fake-switch-dev-prac-1" />
          
        </div>
      </div>
    </>
  )
}

export default Navbar

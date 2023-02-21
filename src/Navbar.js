import React from 'react'
import './App.css';

const Navbar = () => {
  return (
<div className="navbar">
    <ul>
        <li><a href="./">Home</a></li>
        <li><a href="./gallery">Gallery</a></li>
        <li><a href="./contact">Contact</a></li>
        <li><a href="./store">Store</a></li>
    </ul>
</div>  )
}

export default Navbar
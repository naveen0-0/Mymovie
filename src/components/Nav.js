import React from 'react';
import { Link } from 'react-router-dom';

function Nav(){

   const showLinks = () => {
      const links = document.querySelector('.links');
      const burger = document.querySelector('.burger');
      links.classList.toggle('show');
      burger.classList.toggle('cross');
   }

   return (
      <div className="navbar">

         <div className="title">
         <img src={require('../images/icons8-music-48.png')} alt="Music"/>
            <div className="text">
                MyMovie
            </div>
         </div>

         <div className="links show">
            <Link to="/" className="link">Home</Link>
            <Link to="/upcoming" className="link">Upcoming</Link>
            <form action="/fds">
               <input type="search" required/>
               <button type="submit"><img src={require('../images/icons8-search-24.png')} alt="Search"/></button>
            </form>
         </div>

         <div className="burger" onClick={showLinks}>
            <div className="line line1"></div>
            <div className="line line2"></div>
            <div className="line line3"></div>
         </div>

      </div>
   )
}

export default Nav;
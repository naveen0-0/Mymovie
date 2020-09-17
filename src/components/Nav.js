import React,{ useState } from 'react';
import { Link } from 'react-router-dom';

function Nav(){
   const [ input,setInput ] = useState("");

   const searchInput = (e) => {
      setInput(e.target.value)
   }

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
            <div className="searchBox">
               <input type="search" required onChange={ searchInput } placeholder="Search for a movie"/>
               <Link to={`/search/${input}`} className="link"><img src={require('../images/search.png')} alt="Search"/></Link>
            </div>
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
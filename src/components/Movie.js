import React from 'react';
import { Link } from 'react-router-dom'

export default function Movie(props) {

   return (
      <Link to={`/movie/${props.details.id}`}>
         <img src={`https://image.tmdb.org/t/p/w500${props.details.poster_path}`} alt={props.details.title}/>
         <p>{props.details.title}</p>
      </Link>
   )
}
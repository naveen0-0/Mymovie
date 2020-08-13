import React,{ useEffect,useState } from 'react';
import Axios from 'axios';

export default function FullMovie({match}) {

   const [ movie,setMovie ] = useState({});

   useEffect(()=>{
      async function fetchMovie(){
         let fetchedMovie = await Axios.get(`https://api.themoviedb.org/3/movie/${match.params.id}?api_key=4cd9df92b17787ff1bd3f4326a15b903`);
         console.log(fetchedMovie.data);
         setMovie(fetchedMovie.data);
      }
      fetchMovie();
   },[match.params.id]);

   const Budget = (movie) => {
      if(movie.budget !== 0) return `${movie.budget} USD`
      return "Not Available"
   }
   const Revenue = (movie) => {
      if(movie.revenue !== 0) return `${movie.revenue} USD`
      return "Not Available"
   }
   
   return (
      <div className="movie">
         <div>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/>
         </div>
         <div className="details">
               <div>
                  <span className="prop">Title</span>
                  <span className="value">{movie.title}</span>
               </div>
               <div>
                  <span className="prop">Overview</span>
                  <span className="value">{movie.overview}</span>
               </div>
               <div>
                  <span className="prop">Budget</span>
                  <span className="value">{Budget(movie)}</span>
               </div>
               <div>
                  <span className="prop">Revenue</span>
                  <span className="value">{Revenue(movie)}</span>
               </div>
         </div>
      </div>
   )
}
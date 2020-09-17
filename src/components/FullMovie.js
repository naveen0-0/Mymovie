import React,{ useEffect,useState } from 'react';
import Axios from 'axios';

export default function FullMovie({match}) {

   const [ movie,setMovie ] = useState({});
   const [ haveMovie, setHaveMovie ] = useState(false);

   useEffect(()=>{
      async function fetchMovie(){
         let fetchedMovie = await Axios.get(`https://api.themoviedb.org/3/movie/${match.params.id}?api_key=4cd9df92b17787ff1bd3f4326a15b903`);
         setMovie(fetchedMovie.data);
         setHaveMovie(true);
      }
      fetchMovie();
   },[match.params.id]);

   const Budget = (movie) => {
      if(movie.budget !== 0) return `${movie.budget.toLocaleString()} USD`
      return "Not Available"
   }
   const Revenue = (movie) => {
      if(movie.revenue !== 0) return `${movie.revenue.toLocaleString()} USD`
      return "Not Available"
   }
   const Tagline = (movie) => {
      if(movie.tagline) return movie.tagline
      return "Not Available"
   }


   if(!haveMovie){
      return (
         <div className="loading">
            Loading...
         </div>
      )
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
            <div>
               <span className="prop">Release</span>
               <span className="value">{movie.release_date}</span>
            </div>
            <div>
               <span className="prop">Runtime</span>
               <span className="value">{movie.runtime}min</span>
            </div>
            <div>
               <span className="prop">Tagline</span>
               <span className="value">{Tagline(movie)}</span>
            </div>
      </div>
   </div>
   )
}
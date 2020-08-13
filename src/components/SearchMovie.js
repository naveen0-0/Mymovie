import React,{ useState,useEffect } from 'react';
import axios from 'axios';
import Movie from './Movie';

function SearchMovie({match}) {

   const [ nowPlayingMovies, setNowPlayingMovies ] = useState([]);

   const returnMovie = (movie) => {
      if(movie.poster_path){
         return (
            <Movie key={movie.id} details={movie}/>
         )
      }else{
         return;
      }
   }

   useEffect(()=>{
      async function getNowPlayingMovies(){
         let movies = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=4cd9df92b17787ff1bd3f4326a15b903&query=${match.params.name}`);
         setNowPlayingMovies(movies.data.results);
      }
      getNowPlayingMovies();
   },[match.params.name]);

   return (
      <div className="nowplaying">
         <div className="nowplayingmovies">
            {nowPlayingMovies.map(movie=>returnMovie(movie))}
         </div>
      </div>
   )
}

export default SearchMovie;
import React,{ useState,useEffect } from 'react';
import axios from 'axios';
import Movie from './Movie';

function NowPlaying() {

   const [ nowPlayingMovies, setNowPlayingMovies ] = useState([]);

   useEffect(()=>{
      async function getNowPlayingMovies(){
         let movies = await axios.get("https://api.themoviedb.org/3/movie/now_playing?api_key=4cd9df92b17787ff1bd3f4326a15b903&page=1");
         setNowPlayingMovies(movies.data.results)
      }
      getNowPlayingMovies();
   },[]);

   return (
      <div className="nowplaying">
         <div className="nowplayingmovies">
            {nowPlayingMovies.map(movie=><Movie key={movie.title} details={movie}/>)}
         </div>
      </div>
   )
}

export default NowPlaying;
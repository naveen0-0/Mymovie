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

   const returnMovie = (movie) => {
      if(movie.poster_path){
         return (
            <Movie key={movie.id} details={movie}/>
         )
      }else{
         return;
      }
   }

   const EmptyOrNot = () => {
      if(nowPlayingMovies){
         return (
            <div className="nowplayingmovies">
               {nowPlayingMovies.map(movie=>returnMovie(movie))}
            </div>
         )
      }
      return <div>Found Nothing, Search Something Else</div>
   }

   return (
      <div className="nowplaying">
         <div className="nowplayingmovies">
            {EmptyOrNot()}
         </div>
      </div>
   )
}

export default NowPlaying;
import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import Spinner from './Spinner';

export default function FullMovie({ match }) {

   const [movie, setMovie] = useState({});
   const [haveMovie, setHaveMovie] = useState(false);
   const [videos, setVideos] = useState([]);

   useEffect(() => {
      async function fetchMovie() {
         let fetchedMovie = await Axios.get(`https://api.themoviedb.org/3/movie/${match.params.id}?api_key=4cd9df92b17787ff1bd3f4326a15b903`);
         setMovie(fetchedMovie.data);
         setHaveMovie(true);
      }

      async function getVideos() {
         let videos = await Axios.get(`https://api.themoviedb.org/3/movie/${match.params.id}/videos?api_key=4cd9df92b17787ff1bd3f4326a15b903&language=en-US`);
         setVideos(videos.data.results);
      }

      fetchMovie();
      getVideos();
   }, [match.params.id]);

   const Budget = (movie) => {
      if (movie.budget !== 0) return `${movie.budget.toLocaleString()} USD`
      return "Not Available"
   }
   const Revenue = (movie) => {
      if (movie.revenue !== 0) return `${movie.revenue.toLocaleString()} USD`
      return "Not Available"
   }
   const Tagline = (movie) => {
      if (movie.tagline) return movie.tagline
      return "Not Available"
   }


   if (!haveMovie) {
      return <Spinner />
   }

   return (
      <div className="movie">
         <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="movieImg"/>

         <div className="prop"><span>Title :</span> {movie.title}</div>
         <div className="prop"><span>Overview :</span> {movie.overview}</div>
         <div className="prop"><span>Budget :</span> {Budget(movie)}</div>
         <div className="prop"><span>Revenue :</span> {Revenue(movie)}</div>
         <div className="prop"><span>Release :</span> {movie.release_date}</div>
         <div className="prop"><span>Runtime :</span> {movie.runtime}mins</div>
         <div className="prop"><span>Tagline :</span> {Tagline(movie)}</div>


         <div className="videosHead">Trailers and related videos</div>


         <div className="videos">
            {videos.map(video => (
               <div key={video.key}>
                  <iframe src={`https://www.youtube.com/embed/${video.key}`} frameBorder="0" title={video.key} width="300px" height="200px" allowFullScreen className="video"></iframe>
                  <div className="videoName">{video.name}</div>
               </div>
            ))}
         </div>

      </div>
   )
}
import { useState } from 'react';
import api from '../services/api';

export default function Cleiton () {
   const [resultedMovies, setResultedMovies] = useState([]);

   function handleNewRequest () {
      api.get(`/search/movie?api_key=${process.env.TMDB_AUTH}&query=matrix&language=pt-BR&include_adult=false&page=1`).then (response => {
         const resultedMoviesToCommit = resultedMovies.concat(response.data.results);
         setResultedMovies(resultedMoviesToCommit);
      })
   }
   function handleLog () {
      console.log(resultedMovies);
   }

   return(<div>
      
      <a onClick={handleNewRequest}>Testa ai man</a> <a onClick={handleLog}>Agora loga</a>
   </div> )
}
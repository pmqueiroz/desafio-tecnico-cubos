import { Container, Header, Main, MovieCard, Navigation } from '../styles/pages/home';
import { useCallback, useState, useEffect } from 'react';
import api from '../services/api';
import dayjs from 'dayjs';

export default function Home() {
   const [resultedMovies, setResultedMovies] = useState(null);
   const [movieGenres, setMovieGenres] = useState(null);
   const img_src = 'https://image.tmdb.org/t/p/w500';

   useEffect(() => {
      try {
         api.get(`/genre/movie/list?api_key=${process.env.TMDB_AUTH}&language=pt-BR`).then (response => {
            setMovieGenres(response.data.genres);
            console.log(movieGenres);
         })
      } catch (error) {
         console.log(error.message);
      }
   }, []);

   const handleSubmitSearch = useCallback((e) => {
      if(e.keyCode == 13){
         try {
            api.get(`/search/movie?api_key=${process.env.TMDB_AUTH}&query=${e.target.value}&language=pt-BR&include_adult=false`).then (response => {
               setResultedMovies(response.data.results);
            })
         } catch (error) {
            console.log(error.message);
         }
      }
   }, []);

  return (
    <Container>
       <Header>
         <h1>Movies</h1>
       </Header>

       <Main>
         <input type="text" onKeyDown={handleSubmitSearch} placeholder="Busque um filme por nome, ano ou gênero..." />

         <div className="results">
            {
               resultedMovies && resultedMovies.map(movie => (
                  <MovieCard key={movie.id}>
                     <img src={`${img_src}${movie.poster_path}`} alt={movie.title}/>
                     <div className="content">
                        <div className="header">
                           <span className="rating">{movie.vote_average * 10}%</span>
                           <a href={`/${movie.id}`}>
                              <h1>{movie.title}</h1>
                           </a>
                           <span className="relase-date">{
                              dayjs(movie.release_date).format('DD/MM/YYYY')
                           }</span>
                        </div>
                        <p>{movie.overview ? movie.overview : "Este filme não possui sinopse registrada"}</p>
                        <div className="tags">
                           {
                              movie.genre_ids.map(genreId => {
                                 var genre = movieGenres.find(genre => genre.id === genreId);
                                 return (
                                    <span key={genreId}>{genre.name}</span>
                                 )
                              })
                           }
                        </div>
                     </div>
                  </MovieCard>
               ))
            }
         </div>
       </Main>
         <Navigation>
            <span>1</span>
            <span>2</span>
            <span className="active">3</span>
            <span>4</span>
            <span>5</span>
         </Navigation>
    </Container>
  )
}

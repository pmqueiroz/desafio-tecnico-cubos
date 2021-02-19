import { useCallback, useState, useEffect } from 'react';
import api from '../services/api';
import { Container, Header, Main, MovieCard, Replacement } from '../styles/pages/home';
import Navigation from '../components/Navigation';
import dayjs from 'dayjs';
import Lottie from 'react-lottie';
import ClapperpaperAnimation from '../assets/clapperpaper.json';
import coverReplacement from '../assets/cover-replacement.png';

export default function Home() {
   const [resultedMovies, setResultedMovies] = useState(null);
   const [movieGenres, setMovieGenres] = useState(null);
   const [resultedMoviesQtt, setResultedMoviesQtt] = useState(0);
   const [currentPage, setCurrentPage] = useState(1);
   const [animationState, setAnimationState] = useState({
      isStopped: false,
      isPaused: false
   })
   const img_src = 'https://image.tmdb.org/t/p/w500';
   const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: ClapperpaperAnimation,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };

   useEffect(() => {
      try {
         api.get(`/genre/movie/list?api_key=${process.env.TMDB_AUTH}&language=pt-BR`).then (response => {
            setMovieGenres(response.data.genres);
         })
      } catch (error) {
         console.log(error.message);
      }
   }, []);

   const handleChangePage = useCallback((numberPage: number) => {
      setCurrentPage(numberPage);
   }, [])

   const handleSearchMovies = useCallback(e => {
      try {
         if (e.target.value) {
            api.get(`/search/movie?api_key=${process.env.TMDB_AUTH}&query=${e.target.value}&language=pt-BR&include_adult=false`).then (response => {
               setResultedMovies(response.data.results);
               setResultedMoviesQtt(response.data.total_results);
            })
         } else {
            setResultedMovies(null);
            setResultedMoviesQtt(0);
         }
      } catch (error) {
         console.log(error.message);
      }
   }, []);

  return (
    <Container>
       <Header>
         <h1>Movies</h1>
       </Header>

       <Main>
         <input type="text" onChange={handleSearchMovies} placeholder="Busque um filme por nome, ano ou gênero..." />

         <div className="results">
            {
               resultedMovies 
               ? 
               resultedMovies.map(movie => (
                  <MovieCard key={movie.id}>
                     <img src={movie.poster_path ? img_src + movie.poster_path : '../assets/cover-replacement.png'} alt={movie.title}/>
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
               : 
               <Replacement>
                  <Lottie
                     options={defaultOptions}
                     height={400}
                     width={500}
                     isStopped={animationState.isStopped}
                     isPaused={animationState.isPaused}
                  />
                  <h1>Experimente buscar por um título ou gênero</h1>
               </Replacement>
            }
         </div>
       </Main>
       {
         resultedMoviesQtt &&
         <Navigation 
            moviesQuantity={resultedMoviesQtt} 
            currentPage={currentPage} 
            handleChangePage={handleChangePage} 
         />
       }
    </Container>
  )
}

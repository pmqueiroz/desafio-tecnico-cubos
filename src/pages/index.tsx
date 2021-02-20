import { useCallback, useState, useEffect } from 'react';
import api from '../services/api';
import { Container, Header, Main, MovieCard, Replacement } from '../styles/pages/home';
import Navigation from '../components/Navigation';
import dayjs from 'dayjs';
import Lottie from 'react-lottie';
import ClapperpaperAnimation from '../assets/clapperpaper.json';

export default function Home() {
   const [resultedMovies, setResultedMovies] = useState(null);
   const [searchQuerry, setSearchQuerry] = useState('');
   const [movieGenres, setMovieGenres] = useState(null);
   const [resultedMoviesQtt, setResultedMoviesQtt] = useState(0);
   const [currentPage, setCurrentPage] = useState(1);
   const [pageIndexStart, setPageIndexStart] = useState(0);
   const [pageIndexEnd, setPageIndexEnd] = useState(4);
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
         api.get(`/genre/movie/list?api_key=${process.env.TMDB_AUTH}&language=pt-BR`).then(response => {
            setMovieGenres(response.data.genres);
         })
         
      } catch (error) {
         console.log(error.message);
      }

   }, []);

   const handleChangePageOnNav = useCallback((numberPage: number) => {
      let calc = numberPage * 5;
      
      setCurrentPage(numberPage);
      setPageIndexStart(calc - 5);
      setPageIndexEnd(calc - 1);

      const pageToSearch = Math.floor((currentPage * 20) / 20);

      console.log(pageToSearch);

      if (pageToSearch > 1) {
         try {
            api.get(`/search/movie?api_key=${process.env.TMDB_AUTH}&query=${searchQuerry}&language=pt-BR&include_adult=false&page=${pageToSearch}`).then (response => {
               setResultedMovies(response.data.results);
               setResultedMoviesQtt(response.data.total_results);
            })
         } catch (error) {
            console.log(searchQuerry);
         }
      }

   }, [setCurrentPage,setPageIndexStart, setPageIndexEnd])

/*    const handleGetMovieList = useCallback(() => {
      const pageToSearch = Math.floor((currentPage * 20) / 20);
      console.log(searchQuerry);

      try {
         api.get(`/search/movie?api_key=${process.env.TMDB_AUTH}&query=${searchQuerry}&language=pt-BR&include_adult=false&page=${pageToSearch}`).then (response => {
            setResultedMovies(response.data.results);
            setResultedMoviesQtt(response.data.total_results);
         })

      } catch (error) {
         console.log(searchQuerry);
      }
   }, []); */

   const handleSearchMovies = e => {
      if (e.target.value) {
         try {
            api.get(`/search/movie?api_key=${process.env.TMDB_AUTH}&query=${e.target.value}&language=pt-BR&include_adult=false`).then (response => {
               setResultedMovies(response.data.results);
               setResultedMoviesQtt(response.data.total_results);
            })
   
         } catch (error) {
            console.log(searchQuerry);
         }
      } else {
         setResultedMovies(null);
         setResultedMoviesQtt(0);
      }
   };

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
               resultedMovies.slice(pageIndexStart, pageIndexEnd).map(movie => (
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
            handleChangePage={handleChangePageOnNav} 
         />
       }
    </Container>
  )
}

import { useCallback, useState, useEffect } from 'react';
import api from '../services/api';
import { Container, Header, Main, MovieCard, Replacement } from '../styles/pages/home';
import Navigation from '../components/Navigation';
import dayjs from 'dayjs';
import Lottie from 'react-lottie';
import ClapperpaperAnimation from '../assets/clapperpaper.json';

export default function Home() {
   const [resultedMovies, setResultedMovies] = useState(null);
   const [searchedPageMovies, setSearchedPageMovies] = useState([1]);
   const [searchQuerry, setSearchQuerry] = useState('');
   const [movieGenres, setMovieGenres] = useState(null);
   const [resultedMoviesQtt, setResultedMoviesQtt] = useState(0);
   const [currentPage, setCurrentPage] = useState(1);
   const [pageIndexStart, setPageIndexStart] = useState(0);
   const [pageIndexEnd, setPageIndexEnd] = useState(5);
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
      const pageToSearch = Math.floor(((currentPage - 1) * 5 / 20) + 1);

      try {
         api.get(`/genre/movie/list?api_key=${process.env.TMDB_AUTH}&language=pt-BR`).then(response => {
            setMovieGenres(response.data.genres);
         })

         if (!searchedPageMovies.includes(pageToSearch)) {
            api.get(`/search/movie?api_key=${process.env.TMDB_AUTH}&query=${searchQuerry}&language=pt-BR&include_adult=false&page=${pageToSearch}`).then (response => {
               setSearchedPageMovies(searchedPageMovies => [...searchedPageMovies, pageToSearch]);
               const resultedMoviesToCommit = resultedMovies.concat(response.data.results);
               console.log({resultedMoviesToCommit});
               setResultedMovies(resultedMoviesToCommit);
            })
         }
         
      } catch (error) {
         console.log(error.message);
      }
      
   }, [currentPage, resultedMovies]);

   function handleChangePageOnNavPerChevron (number) {
      if (currentPage + number <= 0 || currentPage + number >= resultedMoviesQtt / 5) {
         return
      }

      handleChangePageOnNav(currentPage + number);
   }

   const handleSearchMovies = useCallback(e => {
      setPageIndexStart(0);
      setPageIndexEnd(5);
      setCurrentPage(1);
      setSearchQuerry(e.target.value);

      if (e.target.value) {
         try {
            api.get(`/search/movie?api_key=${process.env.TMDB_AUTH}&query=${e.target.value}&language=pt-BR&include_adult=false`).then (response => {
               setResultedMovies(response.data.results);
               setResultedMoviesQtt(response.data.total_results);
            })
   
         } catch (error) {
            console.log(error.message);
         }
      } else {
         setResultedMovies(null);
         setResultedMoviesQtt(0);
      }
   }, [setSearchQuerry, setResultedMovies, setResultedMoviesQtt]);

   const handleChangePageOnNav = useCallback((numberPage: number) => {
      let calc = numberPage * 5;
      
      setCurrentPage(numberPage);
      setPageIndexStart(calc - 5);
      setPageIndexEnd(calc);

   }, [setCurrentPage,setPageIndexStart, setPageIndexEnd])

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
                     <img src={movie.poster_path ? img_src + movie.poster_path : 'https://user-images.githubusercontent.com/54639269/108601890-d5ccb100-737d-11eb-80ee-b217ef4adbd0.png'} alt={movie.title}/>
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
         <Navigation 
            moviesQuantity={resultedMoviesQtt} 
            currentPage={currentPage} 
            handleChangePagePerChevron={handleChangePageOnNavPerChevron}
            handleChangePage={handleChangePageOnNav} 
         />
       }
    </Container>
  )
}

import { useState, useEffect } from 'react';
import { GetServerSideProps } from 'next';
import { Container, Header, Main } from '../styles/pages/movie';
import dayjs from 'dayjs';
import api from '../services/api';
import { by639_1 } from 'iso-language-codes';
import translate from 'translate';

interface ITranslatedInfo {
   language: string;
   status: string;
}

interface IGenre {
   id: number;
   name: string;
}

interface MovieData {
   title: string;
   release_date: string;
   overview: string;
   status: string;
   original_language: string;
   runtime: number;
   vote_average: number;
   budget: number;
   revenue: number;
   poster_path: string;
   youtube_key: string;
   genres: IGenre[];
}

const Movie = ({ 
   title, 
   release_date, 
   overview, 
   status, 
   runtime,  
   original_language,
   vote_average,
   genres,
   budget,
   revenue,
   poster_path,
   youtube_key
}: MovieData) => {
   const [translatedStatus, setTranslatedStatus] = useState('');
   const [translatedLanguage, setTranslatedLanguage] = useState('');

   const img_src = 'https://image.tmdb.org/t/p/w500';

   let watchtime_hours = Math.floor(runtime / 60);
   let watchtime_minutes = runtime % 60;

   const watchtime = `${watchtime_hours}h${watchtime_minutes}min`;

   useEffect( () => {
      translate(by639_1[original_language].name, {to: 'pt', engine: 'libre'}).then(response => {
         setTranslatedLanguage(response);
      })
   
      translate(status, {to: 'pt', engine: 'libre'}).then(response => {
         setTranslatedStatus(response);
      })
   }, [])


   return (
      <Container>
         <Header>
         <h1>Movies</h1>
         </Header>
         <Main>
            <div className="title">
               <h1>{title}</h1>
               <span>{dayjs(release_date).format('DD/MM/YYYY')}</span>
            </div>
            <div className="horizontal-wrapper">
               <div className="content">
                     <h1>Sinopse</h1>
                     <div className="separator"></div>
                     <p>{overview}</p>
                     <h1>Infomações</h1>
                     <div className="separator"></div>
                     <div className="info">
                        <div>
                           <h2>Situação</h2>
                           <span>{translatedStatus}</span>
                        </div>

                        <div>
                           <h2>Idioma</h2>
                           <span>{translatedLanguage}</span>
                        </div>

                        <div>
                           <h2>Duração</h2>
                           <span>{watchtime}</span>
                        </div>

                        <div>
                           <h2>Orçamento</h2>
                           <span>${budget},00</span>
                        </div>

                        <div>
                           <h2>Receita</h2>
                           <span>${revenue},00</span>
                        </div>

                        <div>
                           <h2>Lucro</h2>
                           <span>${revenue - budget},00</span>
                        </div>
                     </div>
                     <div className="footer">
                        <div className="tags">
                           {genres.map(genre => (
                              <span>{genre.name}</span>
                           ))}
                        </div>
                        <span className="rating">{vote_average  * 10}%</span>
                     </div>
               </div>
               <img src={`${img_src}${poster_path}`} alt={title}/>
            </div>
            {
               youtube_key &&
               <iframe 
                  src={`https://www.youtube.com/embed/${youtube_key}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
               />
            }
         </Main>
      </Container>
   );
}

export const getServerSideProps: GetServerSideProps<MovieData> = async (context) => {
   const { movieId } = context.query;
   const userResponse = await api.get(`/movie/${movieId}?api_key=${process.env.TMDB_AUTH}&language=pt-BR`);
   const videosResponse = await api.get(`/movie/${movieId}/videos?api_key=${process.env.TMDB_AUTH}&language=pt-BR`);

   const youtubeVideo = videosResponse.data.results.filter(result => {
      return result.site === 'YouTube';
   })

   const youtube_key = youtubeVideo[0] ? youtubeVideo[0].key : null;

   const { 
      title, 
      release_date, 
      overview, 
      status, 
      runtime,  
      genres, 
      original_language, 
      vote_average,
      budget,
      revenue,
      poster_path
   } = userResponse.data;

   return {
      props: {
         title, 
         release_date, 
         overview, 
         status, 
         runtime,
         original_language,
         vote_average,
         genres,
         budget,
         revenue,
         poster_path,
         youtube_key
      },
    };
}

export default Movie;
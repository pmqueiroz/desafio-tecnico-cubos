import { Container, Header, Main, MovieCard, Navigation } from '../styles/pages/home';
import { useCallback, useState } from 'react';
import api from '../services/api';

export default function Home() {
   const inputValue = useState(null);

   const handleSubmitSearch = useCallback((e) => {
      if(e.keyCode == 13){
         try {
            const response = api.get(`/search/movie?api_key=${process.env.TMDB_AUTH}&language=pt-BR&include_adult=false`);
            console.log(response);
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
            <MovieCard>
               <img src="https://images-na.ssl-images-amazon.com/images/I/81Um6M2W5kL._SL1372_.jpg" alt=""/>
               <div className="content">
                  <div className="header">
                     <span className="rating">75%</span>
                     <h1>Thor: Ragnarok</h1>
                     <span className="relase-date">25/10/2017</span>
                  </div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat rem repudiandae quibusdam totam? Pariatur asperiores qui iure quibusdam cupiditate deleniti neque, tempore assumenda quo perspiciatis corporis unde dolor rem iste? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae repudiandae nam, culpa porro velit perspiciatis, repellat aliquid ducimus reiciendis facere sequi architecto, neque itaque quasi? Tempore odio eveniet id voluptate. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat rem repudiandae quibusdam totam? Pariatur asperiores qui iure quibusdam cupiditate deleniti neque, tempore assumenda quo perspiciatis corporis unde dolor rem iste? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae repudiandae nam, culpa porro velit perspiciatis, repellat aliquid ducimus reiciendis facere sequi architecto, neque itaque quasi? Tempore odio eveniet id voluptate. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat rem repudiandae quibusdam totam? Pariatur asperiores qui iure quibusdam cupiditate deleniti neque, tempore assumenda quo perspiciatis corporis unde dolor rem iste? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae repudiandae nam, culpa porro velit perspiciatis, repellat aliquid ducimus reiciendis facere sequi architecto, neque itaque quasi? Tempore odio eveniet id voluptate. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat rem repudiandae quibusdam totam? Pariatur asperiores qui iure quibusdam cupiditate deleniti neque, tempore assumenda quo perspiciatis corporis unde dolor rem iste? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae repudiandae nam, culpa porro velit perspiciatis, repellat aliquid ducimus reiciendis facere sequi architecto, neque itaque quasi? Tempore odio eveniet id voluptate. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat rem repudiandae quibusdam totam? Pariatur asperiores qui iure quibusdam cupiditate deleniti neque, tempore assumenda quo perspiciatis corporis unde dolor rem iste? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae repudiandae nam, culpa porro velit perspiciatis, repellat aliquid ducimus reiciendis facere sequi architecto, neque itaque quasi? Tempore odio eveniet id voluptate. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat rem repudiandae quibusdam totam? Pariatur asperiores qui iure quibusdam cupiditate deleniti neque, tempore assumenda quo perspiciatis corporis unde dolor rem iste? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae repudiandae nam, culpa porro velit perspiciatis, repellat aliquid ducimus reiciendis facere sequi architecto, neque itaque quasi? Tempore odio eveniet id voluptate. </p>
                  <div className="tags">
                     <span>Ação</span>
                     <span>Aventura</span>
                     <span>Fantasia</span>
                  </div>
               </div>
            </MovieCard>
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

import { Container, Header, Main, MovieCard, Navigation } from '../styles/pages/home';

export default function Home() {
  return (
    <Container>
       <Header>
         <h1>Movies</h1>
       </Header>

       <Main>
         <input type="text" placeholder="Busque um filme por nome, ano ou gênero..." />

         <div className="results">
            <MovieCard>
               <img src="https://images-na.ssl-images-amazon.com/images/I/81Um6M2W5kL._SL1372_.jpg" alt=""/>
               <div className="content">
                  <div className="header">
                     <div className="rating">
                        <span>75%</span>
                     </div>
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

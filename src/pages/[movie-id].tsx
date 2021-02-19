import { Container, Header, Main } from '../styles/pages/movie';

export default function Movie () {
   return (
      <Container>
         <Header>
         <h1>Movies</h1>
         </Header>
         <Main>
            <div className="title">
               <h1>
                  Thor: Ragnarok
               </h1>
               <span>25/10/2017</span>
            </div>
            <div className="horizontal-wrapper">
               <div className="content">
                     <h1>Sinopse</h1>
                     <div className="separator"></div>
                     <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam, ipsam. Corrupti recusandae, deserunt ex eveniet rerum iusto dolores nisi tenetur expedita voluptatem quae culpa eligendi distinctio earum impedit, libero sint.</p>
                     <h1>Infomações</h1>
                     <div className="separator"></div>
                     <div className="info">
                        <div>
                           <h2>Situação</h2>
                           <span>Lançado</span>
                        </div>

                        <div>
                           <h2>Idioma</h2>
                           <span>Inglês</span>
                        </div>

                        <div>
                           <h2>Duração</h2>
                           <span>2h 10min</span>
                        </div>

                        <div>
                           <h2>Orçamento</h2>
                           <span>$180.000000,00</span>
                        </div>

                        <div>
                           <h2>Receita</h2>
                           <span>$853.977.000,00</span>
                        </div>

                        <div>
                           <h2>Lucro</h2>
                           <span>$673.977.000,00</span>
                        </div>
                     </div>
                     <div className="footer">
                        <div className="tags">
                           <span>Ação</span>
                           <span>Aventura</span>
                           <span>Fantasia</span>
                        </div>
                        <span className="rating">75%</span>
                     </div>
               </div>
               <img src="https://images-na.ssl-images-amazon.com/images/I/81Um6M2W5kL._SL1372_.jpg" alt=""/>
            </div>
            <iframe src="https://www.youtube.com/embed/v7MGUNV8MxU" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
         </Main>
      </Container>
   );
}
import { FunctionComponent, useState } from 'react';
import { Container } from './styles';

interface NavigationData {
   moviesQuantity: number;
   currentPage: number;
   handleChangePage: (value? : number) => void;
}

 const Navigator: FunctionComponent<NavigationData> = ({
   moviesQuantity,
      currentPage,
      handleChangePage
   }) => {
   const pageNumbers= [];

   for(let index = 1; index <= Math.ceil(moviesQuantity / 5); index++){
      pageNumbers.push(index);
   }

   return (
         <Container isHidden={!moviesQuantity}>
            {moviesQuantity && pageNumbers.map(pageNumber => (
               <span 
                  key={pageNumber} 
                  onClick={() => handleChangePage(pageNumber)}
                  className={currentPage === pageNumber ? 'active' : null}
               >
                     {pageNumber}
               </span>
            ))}
         </Container>
      )
}

export default Navigator;
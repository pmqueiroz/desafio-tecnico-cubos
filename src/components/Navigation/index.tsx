import { FunctionComponent, useState } from 'react';
import { Container } from './styles';

interface NavigationData {
   moviesQuantity: number;
   currentPage: number;
   handleChangePage: (value? : number) => void;
   handleChangePagePerChevron: (value? : number) => void;
}

 const Navigator: FunctionComponent<NavigationData> = ({
      moviesQuantity,
      currentPage,
      handleChangePage,
      handleChangePagePerChevron
   }) => {
   const pageNumbers= [];

   for (let index = 1; index <= Math.ceil(moviesQuantity / 5); index++){
      pageNumbers.push(index);
   }

   return (
         <Container isHidden={!moviesQuantity}>
            <a onClick={() => handleChangePagePerChevron(-1)}>&#60;</a>
            {moviesQuantity && pageNumbers.slice(currentPage - 3 < 0 ? 0 : currentPage - 3, currentPage + 2).map(pageNumber => (
               <span 
                  key={pageNumber} 
                  onClick={() => handleChangePage(pageNumber)}
                  className={currentPage === pageNumber ? 'active' : null}
               >
                  {pageNumber}
               </span>
            ))}
            <a onClick={() => handleChangePagePerChevron(1)}>&#62;</a>
         </Container>
      )
}

export default Navigator;
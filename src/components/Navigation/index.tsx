import { FunctionComponent } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
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
            <FiChevronLeft onClick={() => handleChangePagePerChevron(-1)} />
            {moviesQuantity && pageNumbers.slice(currentPage - 3 < 0 ? 0 : currentPage - 3, currentPage + 2).map(pageNumber => (
               <span 
                  key={pageNumber} 
                  onClick={() => handleChangePage(pageNumber)}
                  className={currentPage === pageNumber ? 'active' : null}
               >
                  {pageNumber}
               </span>
            ))}
            <FiChevronRight onClick={() => handleChangePagePerChevron(1)} />
         </Container>
      )
}

export default Navigator;
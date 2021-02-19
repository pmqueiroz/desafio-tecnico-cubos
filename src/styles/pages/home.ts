import styled from 'styled-components';

export const Container = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   width: 100%;
   height: auto;
   flex-direction: column;
   margin-bottom: 2rem;
`;

export const Header = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   width: 100%;
   height: 9rem;
   background: var(--color-primary);

   h1 {
      font: 400 5rem Abel;
      color: var(--color-text-in-primary);
   }
`;

export const Replacement = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   width: 100%;
   height: auto;

   h1 {
      font: 400 4rem Abel;
      color: var(--color-primary);
   }
`;

export const Main = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   width: 90%;
   height: auto;
   flex-direction: column;
   padding: 3rem 0;

   .results {
      width: 100%;
   }

   input {
      width: 100%;
      background: var(--color-background-darker);
      padding: 1rem 3rem;
      border-radius: 12rem;

      &::placeholder {
         font: 400 1.8rem Abel;
         color: var(--color-primary);
      }
   }
`;

export const MovieCard = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   width: 100%;
   margin-top: 3rem;
   height: 37rem;
   background: var(--color-background-darker);

   img {
      height: 100%;
   }

   .content {
      display: flex;
      flex-direction: column;
      justify-content: start;
      align-items: flex-start;
      height: 100%;
      flex: 1;

      .header {
         position: relative;
         width: 100%;

         h1 {
            font: 400 3.3rem Abel;
            color: var(--color-text-in-primary);
            background: var(--color-primary);
            height: 7rem;
            display: flex;
            align-items: flex-end;
            padding-left: 10rem;
            flex: 1;
         }

         .relase-date {
            margin-left: 10rem;
            font: 400 1.8rem Abel;
            color: var(--color-text-complement);
         }

         .rating {
            position: absolute;
            top: 2.5rem;
            left: 1rem;
            background: var(--color-primary);
            width: 8rem;
            height: 8rem;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            color: var(--color-text-in-primary);
            font: 400 2.5rem Abel;

            &::after {
               content: "";
               position: absolute;
               border: 0.4rem solid var(--color-text-in-primary);
               border-radius: 50%;
               width: 6.5rem;
               height: 6.5rem;
            }
         }
      }

      p {
         margin: 2rem;
         font: 400 1.8rem Lato;
         overflow: hidden;
         text-overflow: ellipsis;
         max-height: 15rem;
      }

      .tags {
         margin-left: 2rem;

         span {
            background: var(--color-background);
            border: 0.1rem solid var(--color-primary);
            border-radius: 5rem;
            padding: 0.2rem 0.7rem;
            color: var(--color-primary);

            & + span {
               margin-left: 1rem;
            }
         }
      }
   }
`;

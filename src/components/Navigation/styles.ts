import styled, { css } from 'styled-components';

interface iContainer {
   isHidden: boolean;
}

export const Container = styled.nav<iContainer>`
   display: flex;
   justify-content: center;
   align-items: center;

   ${(props) => props.isHidden && css`
      display: none;
   `}

   svg {
      cursor: pointer;
      
      &:first-of-type {
         margin: 0 1rem 0 0;
      }

      &:last-of-type {
         margin: 0 0 0 1rem;
      }
   }

   span {
      color: var(--color-primary);
      cursor: pointer;
      & + span {
         margin-left: 1rem;
      }
   }

   .active {
      background: var(--color-primary);
      color: var(--color-text-in-primary);
      border-radius: 50%;
      font: 400 2.5rem Abel;
      width: 4rem;
      height: 4rem;
      display: flex;
      justify-content: center;
      align-items: center;

      &::after {
         content: "";
         position: absolute;
         width: 3rem;
         height: 3rem;
         border: solid 0.2rem var(--color-text-in-primary);
         border-radius: 50%;
      }
   }
`;
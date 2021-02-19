import styled from 'styled-components';

export const Container = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   width: 100%;
   height: auto;
   flex-direction: column;
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

export const Main = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   width: 100%;
   height: auto;
   flex-direction: column;
   margin-top: 5rem;

   .title {
      width: 100%;
      background: var(--color-background-darker);
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 6rem;
      padding: 0 3rem;

      h1 {
         font: 400 3.2rem Abel;
         color: var(--color-primary);
      }

      span {
         font: 400 2rem Abel;
         color: var(--color-text-complement);
      }
   }

   .horizontal-wrapper {
      display: flex;
      background: var(--color-background-box);
      width: 100%;

      img {
         width: 35rem;
      }
   }

   .content {
      margin: 2.5rem 0 0 4rem;

      h1, h2 {
         color: var(--color-primary);
      }

      p {
         margin: 1rem 0 3rem 0;
         max-width: 95%;
         font-size: 1.8rem;
      }

      .info {
         display: flex;
         justify-content: space-between;
         width: 95%;
         margin-top: 1rem;

         div {
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
         }
      }

      .separator {
         width: 95%;
         margin-top: 1rem;
         height: .2rem;
         background: var(--color-text-in-primary);
      }
   }

   .footer {
      margin-top: 4rem;
      display: flex;
      justify-content: space-between;
      width: 95%;

      .rating {
         display: flex;
         justify-content: center;
         align-items: center;
         color: var(--color-text-in-primary);
         font: 400 4.7rem Abel;
         width: 12rem;
         height: 12rem;
         border-radius: 50%;
         background: var(--color-primary);

         &::after{
            content: '';
            width: 10rem;
            height: 10rem;
            border-radius: 50%;
            border: solid .5rem var(--color-text-in-primary);
            position: absolute;
         }
      }

      .tags {
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

   iframe {
      width: 100%;
      height: calc(100vw * 0.5625);
      margin-top: 5rem;
   }
`;
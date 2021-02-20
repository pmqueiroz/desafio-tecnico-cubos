import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
   * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      user-select: none;
   }

   *:focus {
      outline: none;
   }

   body,
   input,
   button,
   textarea {
      font: 400 1.6rem Abel;
      color: var(--color-text-base);
      border: none;
      background: none;
   }

   a {
      text-decoration: none;
   }

   body {
      background: var(--color-background);
      color: var(--color-text-base);
   }

   :root{
      --color-primary: #116193;
      --color-text-in-primary: #00E8E4;
      --color-text-base: #555555;
      --color-text-complement: #898989;
      --color-background: #FFFFFF;
      --color-background-box: #F2F2F2;
      --color-background-darker: #EBEBEB;
   }

   ::-webkit-scrollbar {
      width: 0.7rem;
   }
   ::-webkit-scrollbar-track {
      background: transparent;
      border-radius: 0.5rem;
   }
   ::-webkit-scrollbar-thumb {
      background: var(--color-primary);
      border-radius: 0.5rem;
   }
   ::-webkit-scrollbar-corner { background: transparent; }
   
   @media (min-width: 850px) {
      :root{
         font-size: 62.5%
      }
   }
`;
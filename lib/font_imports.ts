import { Playfair_Display, Montserrat } from 'next/font/google';

export const Playfair = Playfair_Display({
  variable: '--font-heading',
  display: 'swap',
  subsets: ['latin-ext'],
});

export const MontserratFont = Montserrat({
  variable: '--font-body',
  display: 'swap',
  subsets: ['latin-ext'],
});

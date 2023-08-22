import { Quicksand, Montserrat } from 'next/font/google';

export const Quicksand_font = Quicksand({
  variable: '--font-heading',
  display: 'swap',
  subsets: ['latin-ext'],
});

export const MontserratFont = Montserrat({
  variable: '--font-body',
  display: 'swap',
  subsets: ['latin-ext'],
});

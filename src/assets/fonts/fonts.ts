import { Bungee, Bungee_Inline, Lato, Nunito } from 'next/font/google'

export const lato = Lato({ subsets: ['latin'], weight: ['400', '700'], variable: '--font-lato', display: 'swap' })
export const nunito = Nunito({ subsets: ['latin'], weight: ['700'], variable: '--font-nunito', display: 'swap' })
export const bungee = Bungee({ subsets: ['latin'], weight: ['400'], display: 'swap' })
export const bungee_inline = Bungee_Inline({ subsets: ['latin'], weight: ['400'], display: 'swap' })

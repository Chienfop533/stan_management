declare module 'next' {
  export declare type NextPage<P = {}, IP = P> = NextComponentType<NextPageContext, IP, P> & {
    authGuard?: boolean
    getLayout?: (page: ReactElement) => ReactNode
  }
}

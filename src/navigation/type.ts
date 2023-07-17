export interface NavigationType {
  title: string
  type: string
  children:
    | {
        title: string
        type: string
        path: string
        icon: string
      }[]
    | {
        title: string
        type: string
        icon: string
        children: {
          title: string
          type: string
          path: string
          icon: string
        }[]
      }[]
}
export interface ChildrenType {
  title: string
  type: string
  path?: string
  icon: string
  children?: {
    title: string
    type: string
    path: string
    icon: string
  }[]
}

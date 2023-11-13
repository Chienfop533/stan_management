export interface ScrumboardType {
  id: string
  image: string
  title: string
  description: string
  beginTime: Date
  endTime?: Date
  progress: number
  status: string
  type: 'public' | 'private'
  listOrderIds: string[]
  list: BoardListType[]
}
export interface BoardListType {
  id: string
  title: string
  cardOrderIds: string[]
}
export interface BoardCardType {
  id: string
  listId: string
  image?: string
  title: string
  description: string
  dueDate?: Date
  memberIds: string[]
  labels: string[]
  attachments: string[]
  todo: string[]
  comments: string[]
}
export interface ScrumboardMemberType {
  id: string
  userId: string
  scrumboardId: string
  avatar: string
  fullName: string
  email: string
  role: 'member' | 'admin'
}

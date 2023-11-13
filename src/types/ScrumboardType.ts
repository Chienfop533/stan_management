export interface ScrumboardType {
  id: string
  image: string
  title: string
  description: string
  create_time?: Date
  update_time?: Date
  begin_time: Date
  end_time?: Date
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
  user_id: string
  scrumboard_id: string
  avatar: string
  full_name: string
  email: string
  role: 'member' | 'admin'
}

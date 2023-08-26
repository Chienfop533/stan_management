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
  star: boolean
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

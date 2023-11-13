import { BoardCardType, ScrumboardMemberType, ScrumboardType } from '@/types/ScrumboardType'
const date = new Date()
const nextDay = new Date(new Date().getTime() + 24 * 60 * 60 * 1000)
const prevDate = new Date(new Date().getTime() - 24 * 60 * 60 * 1000)

const nextMonth =
  date.getMonth() === 11 ? new Date(date.getFullYear() + 1, 0, 1) : new Date(date.getFullYear(), date.getMonth() + 1, 1)

const prevMonth =
  date.getMonth() === 11 ? new Date(date.getFullYear() - 1, 0, 1) : new Date(date.getFullYear(), date.getMonth() - 1, 1)

export const scrumboardData: ScrumboardType[] = [
  {
    id: 'board-id-1',
    image:
      'https://firebasestorage.googleapis.com/v0/b/stan-management.appspot.com/o/stan_image_card%2F1.jpg?alt=media&token=85c21ddf-c8b9-463c-9b0a-b9fde32d3d47',
    title: 'Xây dựng github profile',
    description: 'Xậy dựng trang github profile',
    beginTime: prevDate,
    endTime: date,
    progress: 100,
    status: 'complete',
    type: 'public',
    listOrderIds: ['list-id-1', 'list-id-2', 'list-id-3'],
    list: [
      {
        id: 'list-id-1',
        title: 'To do',
        cardOrderIds: ['card-id-1', 'card-id-2', 'card-id-3']
      },
      {
        id: 'list-id-2',
        title: 'Progress',
        cardOrderIds: ['card-id-4', 'card-id-5', 'card-id-6']
      },
      {
        id: 'list-id-3',
        title: 'Done',
        cardOrderIds: ['card-id-7', 'card-id-8']
      }
    ]
  },
  {
    id: 'board-id-2',
    image:
      'https://firebasestorage.googleapis.com/v0/b/stan-management.appspot.com/o/stan_image_card%2F2.jpg?alt=media&token=3e7d4a8c-34cc-45bb-94c8-5954d2ea1bb0',
    title: 'Xây dựng website stan management',
    description: 'Xậy dựng website quản lý công việc, quản lý lịch trình và quản lý ghi chú',
    beginTime: prevDate,
    endTime: nextMonth,
    progress: 20,
    status: 'active',
    type: 'private',
    listOrderIds: [],
    list: []
  },
  {
    id: 'board-id-3',
    image:
      'https://firebasestorage.googleapis.com/v0/b/stan-management.appspot.com/o/stan_image_card%2F3.jpg?alt=media&token=f868e48e-2dea-4b26-b05d-11647aa7f8fe',
    title: 'Xây dựng website KOL ecommerce',
    description: 'Xây dựng website KOL ecommerce tiếp thị sản phẩm trên sàn thương mại điện tử',
    beginTime: prevMonth,
    progress: 25,
    status: 'pause',
    type: 'public',
    listOrderIds: [],
    list: []
  },
  {
    id: 'board-id-4',
    image:
      'https://firebasestorage.googleapis.com/v0/b/stan-management.appspot.com/o/stan_image_card%2F4.jpg?alt=media&token=47e2dcad-62a7-475c-9a9f-bec3b71a46f0',
    title: 'Xây dưng trang admin dashboard',
    description: 'Xây dựng website quản lý sản phẩm cho admin ',
    beginTime: nextDay,
    endTime: nextMonth,
    progress: 0,
    status: 'init',
    type: 'public',
    listOrderIds: [],
    list: []
  },
  {
    id: 'board-id-5',
    image:
      'https://firebasestorage.googleapis.com/v0/b/stan-management.appspot.com/o/stan_image_card%2F5.jpg?alt=media&token=467f3b2f-a39e-4d92-b04f-cf2723fef313',
    title: 'Xây dựng trang profile với vuejs',
    description: 'Xây dựng trang profile với vuejs ',
    beginTime: prevMonth,
    endTime: prevDate,
    progress: 80,
    status: 'late',
    type: 'public',
    listOrderIds: [],
    list: []
  }
]

export const BoardCardData: BoardCardType[] = [
  {
    id: 'card-id-1',
    listId: 'list-id-1',
    image:
      'https://firebasestorage.googleapis.com/v0/b/stan-management.appspot.com/o/stan_image_card%2F1.jpg?alt=media&token=85c21ddf-c8b9-463c-9b0a-b9fde32d3d47',
    title: 'Xây dựng giao diện',
    description: '',
    memberIds: [],
    labels: [],
    attachments: [],
    todo: [],
    comments: []
  },
  {
    id: 'card-id-2',
    listId: 'list-id-1',
    title: 'Xây dựng dark mode',
    description: '',
    memberIds: [],
    labels: [],
    attachments: [],
    todo: [],
    comments: []
  },
  {
    id: 'card-id-3',
    listId: 'list-id-1',
    title: 'Login',
    description: '',
    memberIds: [],
    labels: [],
    attachments: [],
    todo: [],
    comments: []
  },
  {
    id: 'card-id-4',
    listId: 'list-id-2',
    title: 'Logout',
    description: '',
    memberIds: [],
    labels: [],
    attachments: [],
    todo: [],
    comments: []
  },
  {
    id: 'card-id-5',
    listId: 'list-id-2',
    title: 'Register',
    description: '',
    memberIds: [],
    labels: [],
    attachments: [],
    todo: [],
    comments: []
  },
  {
    id: 'card-id-6',
    listId: 'list-id-2',
    title: 'I18n',
    description: '',
    memberIds: [],
    labels: [],
    attachments: [],
    todo: [],
    comments: []
  },
  {
    id: 'card-id-7',
    listId: 'list-id-3',
    title: 'Drawer',
    description: '',
    memberIds: [],
    labels: [],
    attachments: [],
    todo: [],
    comments: []
  },
  {
    id: 'card-id-8',
    listId: 'list-id-3',
    title: 'AppBar',
    description: '',
    memberIds: [],
    labels: [],
    attachments: [],
    todo: [],
    comments: []
  }
]
export const ScrumboardMember: ScrumboardMemberType[] = [
  {
    id: 'member-id-1',
    userId: 'user-id-1',
    scrumboardId: 'board-id-1',
    avatar:
      'https://firebasestorage.googleapis.com/v0/b/stan-management.appspot.com/o/stan_avatar%2Favatar_1.png?alt=media&token=ea29c8ed-87e6-4bd3-863b-86fe3ee3bf95',
    fullName: 'User test1',
    email: 'usertest1@gmail.com',
    role: 'admin'
  },
  {
    id: 'member-id-2',
    userId: 'user-id-1',
    scrumboardId: 'board-id-2',
    avatar:
      'https://firebasestorage.googleapis.com/v0/b/stan-management.appspot.com/o/stan_avatar%2Favatar_1.png?alt=media&token=ea29c8ed-87e6-4bd3-863b-86fe3ee3bf95',
    fullName: 'User test1',
    email: 'usertest1@gmail.com',
    role: 'admin'
  },
  {
    id: 'member-id-3',
    userId: 'user-id-1',
    scrumboardId: 'board-id-3',
    avatar:
      'https://firebasestorage.googleapis.com/v0/b/stan-management.appspot.com/o/stan_avatar%2Favatar_1.png?alt=media&token=ea29c8ed-87e6-4bd3-863b-86fe3ee3bf95',
    fullName: 'User test1',
    email: 'usertest1@gmail.com',
    role: 'admin'
  },
  {
    id: 'member-id-4',
    userId: 'user-id-1',
    scrumboardId: 'board-id-4',
    avatar:
      'https://firebasestorage.googleapis.com/v0/b/stan-management.appspot.com/o/stan_avatar%2Favatar_1.png?alt=media&token=ea29c8ed-87e6-4bd3-863b-86fe3ee3bf95',
    fullName: 'User test1',
    email: 'usertest1@gmail.com',
    role: 'admin'
  },
  {
    id: 'member-id-5',
    userId: 'user-id-1',
    scrumboardId: 'board-id-5',
    avatar:
      'https://firebasestorage.googleapis.com/v0/b/stan-management.appspot.com/o/stan_avatar%2Favatar_1.png?alt=media&token=ea29c8ed-87e6-4bd3-863b-86fe3ee3bf95',
    fullName: 'User test1',
    email: 'usertest1@gmail.com',
    role: 'admin'
  },
  {
    id: 'member-id-6',
    userId: 'user-id-2',
    scrumboardId: 'board-id-1',
    avatar:
      'https://firebasestorage.googleapis.com/v0/b/stan-management.appspot.com/o/stan_avatar%2Favatar_2.png?alt=media&token=a61f534a-ace3-45e8-a1b1-44824e7ff91c',
    fullName: 'User test2',
    email: 'usertest2@gmail.com',
    role: 'member'
  },
  {
    id: 'member-id-7',
    userId: 'user-id-2',
    scrumboardId: 'board-id-2',
    avatar:
      'https://firebasestorage.googleapis.com/v0/b/stan-management.appspot.com/o/stan_avatar%2Favatar_2.png?alt=media&token=a61f534a-ace3-45e8-a1b1-44824e7ff91c',
    fullName: 'User test2',
    email: 'usertest2@gmail.com',
    role: 'member'
  },
  {
    id: 'member-id-8',
    userId: 'user-id-3',
    scrumboardId: 'board-id-1',
    avatar:
      'https://firebasestorage.googleapis.com/v0/b/stan-management.appspot.com/o/stan_avatar%2Favatar_3.png?alt=media&token=4ff22ff7-3e15-4ba1-891e-739d3e327531',
    fullName: 'User test3',
    email: 'usertest3@gmail.com',
    role: 'member'
  },
  {
    id: 'member-id-9',
    userId: 'user-id-4',
    scrumboardId: 'board-id-1',
    avatar:
      'https://firebasestorage.googleapis.com/v0/b/stan-management.appspot.com/o/stan_avatar%2Favatar_4.png?alt=media&token=a3c8b1e1-2e78-49a7-af9f-9b45b177a9b9',
    fullName: 'User test4',
    email: 'usertest4@gmail.com',
    role: 'member'
  },
  {
    id: 'member-id-10',
    userId: 'user-id-5',
    scrumboardId: 'board-id-1',
    avatar:
      'https://firebasestorage.googleapis.com/v0/b/stan-management.appspot.com/o/stan_avatar%2Favatar_5.png?alt=media&token=0ad9c028-ceba-4fbb-b934-fa80d1a6a5c6',
    fullName: 'User test5',
    email: 'usertest5@gmail.com',
    role: 'member'
  }
]

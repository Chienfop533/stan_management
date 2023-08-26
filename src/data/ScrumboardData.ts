import { ScrumboardMemberType, ScrumboardType } from '@/types/ScrumboardType'
const date = new Date()
const nextDay = new Date(new Date().getTime() + 24 * 60 * 60 * 1000)
const prevDate = new Date(new Date().getTime() - 24 * 60 * 60 * 1000)

const nextMonth =
  date.getMonth() === 11 ? new Date(date.getFullYear() + 1, 0, 1) : new Date(date.getFullYear(), date.getMonth() + 1, 1)

const prevMonth =
  date.getMonth() === 11 ? new Date(date.getFullYear() - 1, 0, 1) : new Date(date.getFullYear(), date.getMonth() - 1, 1)

export const scrumboardData: ScrumboardType[] = [
  {
    id: '8fb1a4d1-16f9-410d-9006-60a401c86e12',
    image: '/images/scrumboard/1.jpg',
    title: 'Xây dựng github profile',
    description: 'Xậy dựng trang github profile',
    begin_time: prevDate,
    end_time: date,
    progress: 100,
    status: 'complete',
    star: true
  },
  {
    id: 'b09fc765-c2fc-4dc6-9d36-0bf284553e9e',
    image: '/images/scrumboard/2.jpg',
    title: 'Xây dựng website stan management',
    description: 'Xậy dựng website quản lý công việc, quản lý lịch trình và quản lý ghi chú',
    begin_time: prevDate,
    end_time: nextMonth,
    progress: 20,
    status: 'active',
    star: true
  },
  {
    id: 'b09fc765-16f9-4dc6-9d36-0bf284553e9e',
    image: '/images/scrumboard/3.jpg',
    title: 'Xây dựng website KOL ecommerce',
    description: 'Xây dựng website KOL ecommerce tiếp thị sản phẩm trên sàn thương mại điện tử',
    begin_time: prevMonth,
    progress: 25,
    status: 'pause',
    star: true
  },
  {
    id: 'b09fc765-c2fc-4dc6-9006-0bf284553e9e',
    image: '/images/scrumboard/4.jpg',
    title: 'Xây dưng trang admin dashboard',
    description: 'Xây dựng website quản lý sản phẩm cho admin ',
    begin_time: nextDay,
    end_time: nextMonth,
    progress: 0,
    status: 'init',
    star: false
  },
  {
    id: '8fb1a4d1-c2fc-410d-9006-60a401c86e12',
    image: '/images/scrumboard/5.jpg',
    title: 'Xây dựng trang profile với vuejs',
    description: 'Xây dựng trang profile với vuejs ',
    begin_time: prevMonth,
    end_time: prevDate,
    progress: 80,
    status: 'late',
    star: false
  }
]
export const ScrumboardMember: ScrumboardMemberType[] = [
  {
    id: 'b09fc765-16f9-4dc6-9d36-0bf124553e9e',
    user_id: '8fb1a4d1-1af9-410d-90d6-60a401c86e12',
    scrumboard_id: '8fb1a4d1-16f9-410d-9006-60a401c86e12',
    avatar: '/images/avatar/1.png',
    full_name: 'User test1',
    email: 'usertest1@gmail.com',
    role: 'admin'
  },
  {
    id: 'b09fc765-16d9-4dc6-9d36-0bf124553e9e',
    user_id: '8fb1a4d1-1af9-410d-90d6-60a401c86e12',
    scrumboard_id: 'b09fc765-c2fc-4dc6-9d36-0bf284553e9e',
    avatar: '/images/avatar/1.png',
    full_name: 'User test1',
    email: 'usertest1@gmail.com',
    role: 'admin'
  },
  {
    id: 'b09fc765-16f9-4dc6-9d36-0bf122353e9e',
    user_id: '8fb1a4d1-1af9-410d-90d6-60a401c86e12',
    scrumboard_id: 'b09fc765-16f9-4dc6-9d36-0bf284553e9e',
    avatar: '/images/avatar/1.png',
    full_name: 'User test1',
    email: 'usertest1@gmail.com',
    role: 'admin'
  },
  {
    id: 'b09fc765-16f9-4dc6-9d36-0bf114553e9e',
    user_id: '8fb1a4d1-1af9-410d-90d6-60a401c86e12',
    scrumboard_id: 'b09fc765-c2fc-4dc6-9006-0bf284553e9e',
    avatar: '/images/avatar/1.png',
    full_name: 'User test1',
    email: 'usertest1@gmail.com',
    role: 'admin'
  },
  {
    id: 'b09fc765-16f9-4dc6-9d36-0bf121253e9e',
    user_id: '8fb1a4d1-1af9-410d-90d6-60a401c86e12',
    scrumboard_id: '8fb1a4d1-c2fc-410d-9006-60a401c86e12',
    avatar: '/images/avatar/1.png',
    full_name: 'User test1',
    email: 'usertest1@gmail.com',
    role: 'admin'
  },
  {
    id: 'b09fc765-12f9-4dc6-9d36-0bf124553e9e',
    user_id: '8fb1a4d1-1af9-410d-90d6-60a401c12e12',
    scrumboard_id: '8fb1a4d1-16f9-410d-9006-60a401c86e12',
    avatar: '/images/avatar/2.png',
    full_name: 'User test2',
    email: 'usertest2@gmail.com',
    role: 'member'
  },
  {
    id: 'b09fc765-16d9-4dc6-9d36-0bf124153e9e',
    user_id: '8fb1a4d1-1af9-410d-90d6-60a401c12e12',
    scrumboard_id: 'b09fc765-c2fc-4dc6-9d36-0bf284553e9e',
    avatar: '/images/avatar/2.png',
    full_name: 'User test2',
    email: 'usertest2@gmail.com',
    role: 'member'
  },
  {
    id: 'b09fc765-16d9-4dc6-9d36-0bf124111e9e',
    user_id: '8fb1a4d1-1af9-120d-90d6-60a401c86e12',
    scrumboard_id: 'b09fc765-c2fc-4dc6-9d36-0bf284553e9e',
    avatar: '/images/avatar/3.png',
    full_name: 'User test3',
    email: 'usertest3@gmail.com',
    role: 'member'
  },
  {
    id: 'b09fc765-16d9-4dc6-1d36-0bf124153e9e',
    user_id: '8fb1a4d1-1af9-410d-55d6-60a401c86e12',
    scrumboard_id: 'b09fc765-c2fc-4dc6-9d36-0bf284553e9e',
    avatar: '/images/avatar/4.png',
    full_name: 'User test4',
    email: 'usertest4@gmail.com',
    role: 'member'
  },
  {
    id: 'b09fc115-16d9-4dc6-9d36-0bf124153e9e',
    user_id: '8fb1a4d1-1af9-410d-90d6-60a401c86e23',
    scrumboard_id: 'b09fc765-c2fc-4dc6-9d36-0bf284553e9e',
    avatar: '/images/avatar/5.png',
    full_name: 'User test5',
    email: 'usertest5@gmail.com',
    role: 'member'
  }
]

import { ScrumboardType } from '@/types/ScrumboardType'
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
    star: false
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

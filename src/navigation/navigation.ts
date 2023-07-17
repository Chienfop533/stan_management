import { NavigationType } from './type'

const navigation: NavigationType[] = [
  {
    title: 'Cá nhân',
    type: 'section',
    children: [
      {
        title: 'Bảng điều khiển',
        type: 'item',
        path: '/personal/dashboard',
        icon: 'carbon:dashboard'
      },
      {
        title: 'Hồ sơ',
        type: 'item',
        path: '/personal/profile',
        icon: 'radix-icons:avatar'
      },
      {
        title: 'Thông báo',
        type: 'item',
        path: '/personal/notification',
        icon: 'tabler:bell'
      },
      {
        title: 'Sự kiện',
        type: 'item',
        path: '/personal/event',
        icon: 'majesticons:bookmark-line'
      },
      {
        title: 'Tóm tắt hoạt động',
        type: 'item',
        path: '/personal/history',
        icon: 'material-symbols:work-history-outline'
      }
    ]
  },
  {
    title: 'Quản lý',
    type: 'section',
    children: [
      {
        title: 'Quản lý lịch trình',
        type: 'group',
        icon: 'solar:calendar-outline',
        children: [
          {
            title: 'Lên kế hoạch',
            type: 'item',
            path: '/manage/schedule',
            icon: 'grommet-icons:plan'
          },
          {
            title: 'Hoạt động thực hiện',
            type: 'item',
            path: '/manage/activity',
            icon: 'fontisto:checkbox-active'
          }
        ]
      },
      {
        title: 'Quản lý công việc',
        type: 'group',
        icon: 'carbon:task-tools',
        children: [
          {
            title: 'Bảng công việc',
            type: 'item',
            path: '/manage/scrumboard',
            icon: 'mingcute:trello-board-line'
          },
          {
            title: 'Trò chuyện',
            type: 'item',
            path: '/manage/chat',
            icon: 'quill:chat'
          }
        ]
      },
      {
        title: 'Quản lý ghi chú',
        type: 'group',
        icon: 'ci:note-edit',
        children: [
          {
            title: 'Ghi chú',
            type: 'item',
            path: '/manage/note',
            icon: 'fluent:note-pin-16-regular'
          },
          {
            title: 'Lưu trữ thông tin',
            type: 'item',
            path: '/manage/storage',
            icon: 'lucide:folder-down'
          }
        ]
      }
    ]
  }
]

export default navigation

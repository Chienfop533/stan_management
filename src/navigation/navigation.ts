import { NavigationType } from './type'

const navigation: NavigationType[] = [
  {
    title: 'Cá nhân',
    type: 'section',
    children: [
      {
        title: 'Bảng điều khiển',
        type: 'item',
        path: '/dashboard',
        icon: 'carbon:dashboard'
      },
      {
        title: 'Hồ sơ',
        type: 'item',
        path: '/profile',
        icon: 'radix-icons:avatar'
      },
      {
        title: 'Thông báo',
        type: 'item',
        path: '/notification',
        icon: 'tabler:bell'
      },
      {
        title: 'Sự kiện',
        type: 'item',
        path: '/event',
        icon: 'majesticons:bookmark-line'
      },
      {
        title: 'Tóm tắt hoạt động',
        type: 'item',
        path: '/history',
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
            path: '/schedule',
            icon: 'grommet-icons:plan'
          },
          {
            title: 'Hoạt động thực hiện',
            type: 'item',
            path: '/activity',
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
            path: '/scrumboard',
            icon: 'mingcute:trello-board-line'
          },
          {
            title: 'Trò chuyện',
            type: 'item',
            path: '/chat',
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
            path: '/note',
            icon: 'fluent:note-pin-16-regular'
          },
          {
            title: 'Lưu trữ thông tin',
            type: 'item',
            path: '/storage',
            icon: 'lucide:folder-down'
          }
        ]
      }
    ]
  }
]

export default navigation

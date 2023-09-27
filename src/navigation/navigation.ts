import { NavigationType } from './type'

const navigation: NavigationType[] = [
  {
    title: 'personal',
    type: 'section',
    children: [
      {
        title: 'dashboard',
        type: 'item',
        path: '/personal/dashboard',
        icon: 'carbon:dashboard'
      },
      {
        title: 'profile',
        type: 'item',
        path: '/personal/profile',
        icon: 'radix-icons:avatar'
      },
      {
        title: 'notification',
        type: 'item',
        path: '/personal/notification',
        icon: 'mi:notification'
      },
      {
        title: 'event',
        type: 'item',
        path: '/personal/event',
        icon: 'majesticons:bookmark-line'
      },
      {
        title: 'activity',
        type: 'item',
        path: '/personal/history',
        icon: 'material-symbols:work-history-outline'
      }
    ]
  },
  {
    title: 'manage',
    type: 'section',
    children: [
      {
        title: 'schedule_management',
        type: 'group',
        icon: 'solar:calendar-outline',
        children: [
          {
            title: 'plan',
            type: 'item',
            path: '/manage/schedule',
            icon: 'grommet-icons:plan'
          },
          {
            title: 'tasks',
            type: 'item',
            path: '/manage/activity',
            icon: 'fontisto:checkbox-active'
          }
        ]
      },
      {
        title: 'task_management',
        type: 'group',
        icon: 'carbon:task-tools',
        children: [
          {
            title: 'scrumboard',
            type: 'item',
            path: '/manage/scrumboard',
            icon: 'mingcute:trello-board-line'
          },
          {
            title: 'chat',
            type: 'item',
            path: '/manage/chat',
            icon: 'quill:chat'
          }
        ]
      },
      {
        title: 'note_management',
        type: 'group',
        icon: 'ci:note-edit',
        children: [
          {
            title: 'notes',
            type: 'item',
            path: '/manage/note',
            icon: 'fluent:note-pin-16-regular'
          },
          {
            title: 'storage',
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

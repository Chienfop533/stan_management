import IconifyIcon from '@/core/components/icon'
import OptionsMenu from '@/core/components/option-menu'
import { Progress } from '@/core/components/progress'
import CustomToolTip from '@/core/components/tooltip'
import { formatDate } from '@/core/utils/convert-date'
import { useAppDispatch } from '@/hooks/redux'
import StatusColor from '@/services/common/statusColor'
import { deleteScrumboard } from '@/store/scrumboardSlice'
import { ScrumboardMemberType, ScrumboardType } from '@/types/ScrumboardType'
import { Avatar, AvatarGroup, Box, Typography, linearProgressClasses, useTheme } from '@mui/material'
import { useRouter } from 'next/router'
import { Dispatch, SetStateAction, useState } from 'react'
import { useTranslation } from 'react-i18next'
interface ScrumboardCardContentType {
  data: ScrumboardType
  member: ScrumboardMemberType[]
  setOpen: Dispatch<SetStateAction<boolean>>
  setScrumboardEdit: Dispatch<SetStateAction<ScrumboardType | undefined>>
}
const ScrumboardCardContent = ({ data, member, setOpen, setScrumboardEdit }: ScrumboardCardContentType) => {
  const theme = useTheme()
  const { t } = useTranslation()
  const router = useRouter()
  const color = StatusColor(data.status)
  const dispatch = useAppDispatch()
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const handleDelete = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation()
    dispatch(deleteScrumboard(data.id))
    setAnchorEl(null)
  }
  const handleEdit = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation()
    setOpen(true)
    setScrumboardEdit(data)
    setAnchorEl(null)
  }

  const listItem = [
    { icon: 'mdi:edit', text: `${t('edit')}`, handleItem: handleEdit },
    { icon: 'mingcute:delete-2-fill', iconColor: 'red', text: `${t('delete')}`, handleItem: handleDelete }
  ]
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation()
    setAnchorEl(event.currentTarget)
  }
  return (
    <Box sx={{ mx: 1 }}>
      <Box sx={{ my: 2, display: 'flex', justifyContent: 'space-between' }}>
        <Typography
          sx={theme => ({
            backgroundColor: color,
            py: 1,
            px: 2,
            fontSize: '14px',
            display: 'flex',
            alignItems: 'center',
            color: theme.palette.primary.contrastText,
            borderRadius: '50px'
          })}
        >
          {`${t(data.status)}`}
        </Typography>
        <Box>
          <CustomToolTip
            title={`${t('member')}`}
            icon='fluent-mdl2:group'
            statusColor={data.status}
            sx={{ mr: 2 }}
            onClick={e => {
              e.stopPropagation()
              router.push('/manage/scrumboard/123/member')
            }}
          />
          <CustomToolTip
            title={`${t('setting')}`}
            icon='dashicons:admin-tools'
            statusColor={data.status}
            sx={{ mr: 2 }}
            onClick={handleClick}
            aria-haspopup={true}
            aria-controls={Boolean(anchorEl) ? 'setting' : undefined}
          />
          <OptionsMenu id='setting' anchorEl={anchorEl} setAnchorEl={setAnchorEl} listItem={listItem} />
        </Box>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', my: 1 }}>
        <IconifyIcon icon='ic:round-date-range' fontSize={24} color={color} />
        <Typography sx={{ fontSize: 12, ml: 2 }}>{`${formatDate(data.beginTime)} - ${
          data.endTime ? formatDate(data.endTime) : t('unknown')
        }`}</Typography>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', my: 1 }}>
        <IconifyIcon icon='entypo:progress-one' fontSize={24} color={color} />
        <Progress
          variant='determinate'
          value={data.progress}
          sx={{
            height: 12,
            width: '100%',
            maxWidth: 150,
            mx: 2,
            [`& .${linearProgressClasses.bar}`]: {
              backgroundColor: color
            }
          }}
        ></Progress>
        <Typography sx={{ fontSize: 12, ml: 2 }}>{`${data.progress}%`}</Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          my: 1,
          position: 'absolute',
          bottom: '0.5rem',
          width: 'calc(100% - 32px)',
          height: 36
        }}
      >
        {member.length > 1 ? (
          <AvatarGroup max={4} sx={{ '.MuiAvatar-root': { width: 36, height: 36 } }}>
            {member.map(item => (
              <Avatar alt={item.fullName} src={item.avatar} key={item.id} />
            ))}
          </AvatarGroup>
        ) : null}
      </Box>
    </Box>
  )
}

export default ScrumboardCardContent

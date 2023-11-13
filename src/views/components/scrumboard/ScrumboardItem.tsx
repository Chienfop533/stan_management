import IconifyIcon from '@/core/components/icon'
import { hexToRGBA } from '@/core/utils/hex-to-rgba'
import { useAppSelector } from '@/hooks/redux'
import { Avatar, AvatarGroup, Box, IconButton, Tooltip, Typography, styled } from '@mui/material'
import { Draggable } from 'react-beautiful-dnd'

const ScrumboardItemStyled = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  margin: '0.25rem 0.5rem',
  borderRadius: '0.5rem',
  height: 'auto',
  width: 'calc(100% - 1rem)',
  boxShadow: `0px 0px 1px ${hexToRGBA(theme.palette.grey[500], 0.5)}`,
  cursor: 'pointer',
  overflow: 'hidden',
  '&:hover': {
    boxShadow: `0px 0px 2px ${hexToRGBA(theme.palette.grey[500], 1)}`
  }
}))
const ScrumboardItem = ({ cardData, index }: any) => {
  const member = useAppSelector(state => state.scrumboard.member).filter(
    item => item.scrumboardId == 'b09fc765-c2fc-4dc6-9d36-0bf284553e9e'
  )

  return (
    <Draggable draggableId={cardData.id} index={index}>
      {provided => (
        <ScrumboardItemStyled ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
          {cardData?.image ? (
            <Box
              sx={{
                width: '100%',
                height: '120px',
                overflow: 'hidden',
                backgroundImage: `url(https://firebasestorage.googleapis.com/v0/b/stan-management.appspot.com/o/stan_image_card%2F1.jpg?alt=media&token=85c21ddf-c8b9-463c-9b0a-b9fde32d3d47)`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundColor: theme => theme.palette.background.default
              }}
            ></Box>
          ) : null}

          <Box sx={{ padding: '0.5rem', display: 'flow-root', minHeight: 24 }}>
            <Box sx={{ display: 'flex', flexDirection: 'row', gap: 1, flexWrap: 'wrap' }}>
              <Tooltip title='ok' placement='top'>
                <Box
                  sx={{
                    width: 50,
                    height: 8,
                    borderRadius: '50px',
                    backgroundColor: theme => theme.palette.orange.dark
                  }}
                ></Box>
              </Tooltip>
              <Tooltip title='ok' placement='top'>
                <Box
                  sx={{
                    width: 50,
                    height: 8,
                    borderRadius: '50px',
                    backgroundColor: theme => theme.palette.orange.dark
                  }}
                ></Box>
              </Tooltip>
              <Tooltip title='ok' placement='top'>
                <Box
                  sx={{
                    width: 50,
                    height: 8,
                    borderRadius: '50px',
                    backgroundColor: theme => theme.palette.orange.dark
                  }}
                ></Box>
              </Tooltip>
              <Tooltip title='ok' placement='top'>
                <Box
                  sx={{
                    width: 50,
                    height: 8,
                    borderRadius: '50px',
                    backgroundColor: theme => theme.palette.orange.dark
                  }}
                ></Box>
              </Tooltip>
            </Box>
            <Typography sx={{ fontWeight: 600, fontSize: '16px', my: 1 }}>Xây dựng dashboard</Typography>

            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                gap: 1,
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'left',
                float: 'left',
                minHeight: 28
              }}
            >
              <Tooltip title='Theo dõi' placement='top'>
                <IconButton sx={{ padding: 0 }}>
                  <IconifyIcon icon='basil:eye-outline' fontSize={20} />
                </IconButton>
              </Tooltip>
              <Tooltip title='Mô tả' placement='top'>
                <IconButton sx={{ padding: 0 }}>
                  <IconifyIcon icon='fluent:list-24-filled' fontSize={20} />
                </IconButton>
              </Tooltip>
              <Tooltip title='Hoàn thành' placement='top'>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    backgroundColor: theme => theme.palette.green.dark,
                    color: 'white',
                    padding: '0.25rem 0.5rem',
                    borderRadius: '1rem',
                    '&:hover': {
                      backgroundColor: theme => hexToRGBA(theme.palette.green.dark, 0.9)
                    }
                  }}
                >
                  <IconifyIcon icon='pajamas:clock' fontSize={18} />
                  <Typography sx={{ fontSize: '14px', ml: 1 }}>20/06/2023</Typography>
                </Box>
              </Tooltip>
              <Tooltip title='Danh sách công việc' placement='top'>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    backgroundColor: theme => theme.palette.green.dark,
                    color: 'white',
                    padding: '0.25rem 0.5rem',
                    borderRadius: '1rem'
                  }}
                >
                  <IconifyIcon icon='mdi:checkbox-marked-outline' fontSize={18} />
                  <Typography sx={{ fontSize: '14px', ml: 1 }}>5/5</Typography>
                </Box>
              </Tooltip>
              <Tooltip title='Đính kèm' placement='top'>
                <IconButton sx={{ padding: 0 }}>
                  <IconifyIcon icon='eva:attach-fill' fontSize={20} />
                  <Typography sx={{ fontSize: '14px', ml: 1 }}>1</Typography>
                </IconButton>
              </Tooltip>
              <Tooltip title='Bình luận' placement='top'>
                <IconButton sx={{ padding: 0 }}>
                  <IconifyIcon icon='heroicons-outline:chat-alt' fontSize={20} />
                  <Typography sx={{ fontSize: '14px', ml: 1 }}>1</Typography>
                </IconButton>
              </Tooltip>
            </Box>
            <Box sx={{ display: 'flex', float: 'right', justifyContent: 'right', alignItems: 'center' }}>
              {member.length > 0 ? (
                <AvatarGroup
                  max={5}
                  sx={{
                    '.MuiAvatar-root': { width: 24, height: 24 },
                    '.MuiAvatar-colorDefault': { fontSize: '14px' }
                  }}
                >
                  {member.map(item => (
                    <Avatar alt={item.fullName} src={item.avatar} key={item.id} />
                  ))}
                </AvatarGroup>
              ) : null}
            </Box>
          </Box>
        </ScrumboardItemStyled>
      )}
    </Draggable>
  )
}

export default ScrumboardItem

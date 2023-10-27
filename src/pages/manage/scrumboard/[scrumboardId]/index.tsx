import ButtonWithIcon from '@/core/components/button-with-icon'
import IconifyIcon from '@/core/components/icon'
import OptionsMenu from '@/core/components/option-menu'
import { hexToRGBA } from '@/core/utils/hex-to-rgba'
import { useAppDispatch, useAppSelector } from '@/hooks/redux'
import { deleteScrumboard } from '@/store/scrumboardSlice'
import ScrumboardList from '@/views/components/scrumboard/ScrumboardList'
import CustomPageHeader from '@/views/pages/home/CustomPageHeader'
import { Box, Grid, Typography, styled } from '@mui/material'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

const ScrumboardContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  height: 'calc(100vh - 145px)',
  overflowY: 'hidden',
  overflowX: 'auto',
  display: '-webkit-inline-box',
  marginTop: '1rem',
  marginBottom: '-2rem',
  borderTop: `1px solid ${hexToRGBA(theme.palette.red.light, 0.4)}`,
  position: 'relative'
}))

const ScrumboardDetail = ({ scrumboardId }: { scrumboardId: string }) => {
  const { t } = useTranslation()
  const dispatch = useAppDispatch()
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const router = useRouter()

  const data = useAppSelector(state => state.scrumboard.data)
  const dataActive = data.find(item => item.id == scrumboardId)
  const handleDelete = () => {
    dispatch(deleteScrumboard(scrumboardId))
    router.push('/manage/scrumboard')
    setAnchorEl(null)
  }
  const listItem = [
    { icon: 'radix-icons:activity-log', text: `${t('scrumboard_activities')}` },
    { icon: 'mingcute:tag-line', text: `${t('scrumboard_labels')}` },
    { icon: 'ic:baseline-edit', text: `${t('scrumboard_edit')}` },
    { icon: 'zondicons:pause-outline', text: `${t('scrumboard_pause')}` },
    { icon: 'mingcute:delete-2-fill', iconColor: 'red', text: `${t('scrumboard_delete')}`, handleItem: handleDelete }
  ]

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  return (
    <>
      <CustomPageHeader pageTitle={dataActive ? dataActive.title : t('scrumboard_detail')} type='subPage'>
        <Grid>
          <ButtonWithIcon
            sx={{ mr: 2 }}
            icon='clarity:filter-grid-circle-line'
            name={`${t('filter')}`}
            onClick={() => console.log('ok')}
          />
          <ButtonWithIcon
            sx={{ mr: 2 }}
            icon='solar:calendar-outline'
            name={`${t('calendar')}`}
            onClick={() => console.log('ok')}
          />
          <ButtonWithIcon
            sx={{ mr: 2 }}
            icon='formkit:people'
            name={`${t('member')}`}
            onClick={() => console.log('ok')}
          />
          <ButtonWithIcon
            sx={{ mr: 2 }}
            icon='uil:setting'
            name={`${t('setting')}`}
            onClick={handleClick}
            aria-haspopup={true}
            aria-controls={Boolean(anchorEl) ? 'setting' : undefined}
          />
          <OptionsMenu id='setting' anchorEl={anchorEl} setAnchorEl={setAnchorEl} listItem={listItem} />
        </Grid>
      </CustomPageHeader>
      <ScrumboardContainer>
        <Box sx={{ margin: '0.5rem', width: 285, position: 'relative' }}>
          <ScrumboardList />
        </Box>
        <Box sx={{ margin: '0.5rem', width: 285, position: 'relative' }}>
          <ScrumboardList />
        </Box>
        <Box sx={{ margin: '0.5rem', width: 285, position: 'relative' }}>
          <ScrumboardList />
        </Box>
        <Box sx={{ margin: '0.5rem', width: 285, position: 'relative' }}>
          <ScrumboardList />
        </Box>
        <Box sx={{ margin: '0.5rem', width: 285, position: 'relative' }}>
          <Box
            sx={{
              padding: '1rem',
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'center',
              cursor: 'pointer',
              borderRadius: '10px',
              backgroundColor: theme =>
                theme.palette.mode == 'light' ? theme.palette.grey[300] : theme.palette.grey[700],
              '&:hover': {
                backgroundColor: theme => theme.palette.grey[500]
              }
            }}
          >
            <IconifyIcon icon='gg:add' fontSize={24} />
            <Typography sx={{ fontWeight: 600, height: 24, fontSize: 16, ml: 2 }}>Thêm danh sách mới</Typography>
          </Box>
        </Box>
      </ScrumboardContainer>
    </>
  )
}

export default ScrumboardDetail

export async function getServerSideProps(context: any) {
  const { scrumboardId } = context.query
  return {
    props: {
      scrumboardId
    }
  }
}

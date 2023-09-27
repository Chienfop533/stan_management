import ButtonWithIcon from '@/core/components/button-with-icon'
import OptionsMenu from '@/core/components/option-menu'
import { useAppDispatch, useAppSelector } from '@/hooks/redux'
import { deleteScrumboard } from '@/store/scrumboardSlice'
import CustomPageHeader from '@/views/pages/home/CustomPageHeader'
import { Grid } from '@mui/material'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

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
        <Grid
          item
          xs={12}
          sm={6}
          sx={theme => ({
            display: 'flex',
            justifyContent: 'flex-end',
            mr: 4,
            [theme.breakpoints.down('sm')]: {
              justifyContent: 'center',
              m: 2
            }
          })}
        ></Grid>
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

import ButtonWithIcon from '@/core/components/button-with-icon'
import IconifyIcon from '@/core/components/icon'
import Search from '@/core/components/search'
import { useAppSelector } from '@/hooks/redux'
import { ScrumboardType } from '@/types/ScrumboardType'
import ScrumboardCard from '@/views/components/scrumboard/ScrumboardCard'
import ScrumboardForm from '@/views/components/scrumboard/ScrumboardForm'
import CustomPageHeader from '@/views/pages/home/CustomPageHeader'
import { Box, Grid, IconButton, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

const ScrumboardPage = () => {
  const data = useAppSelector(state => state.scrumboard.data)
  const starData = data.filter(item => item.star == true)
  const { t } = useTranslation()
  const [open, setOpen] = useState<boolean>(false)
  const [scrumboardEdit, setScrumboardEdit] = useState<ScrumboardType | undefined>(undefined)
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
      <ScrumboardForm open={open} setOpen={setOpen} data={scrumboardEdit} />
      <CustomPageHeader icon='mingcute:trello-board-line' pageTitle={`${t('scrumboard')}`} type='mainPage'>
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
        >
          <Search onChange={e => console.log(e.target.value)} handleClickSearch={() => console.log('ok')} />
        </Grid>
        <Grid>
          <ButtonWithIcon
            sx={{ mr: 2 }}
            icon='clarity:filter-grid-circle-line'
            name={`${t('all')}`}
            onClick={() => console.log('ok')}
          />
          <ButtonWithIcon
            sx={{ mr: 2 }}
            icon='gg:add'
            name={`${t('add')}`}
            onClick={() => {
              setOpen(true)
            }}
          />
        </Grid>
      </CustomPageHeader>
      {starData.length > 0 ? (
        <Box sx={{ display: 'flex', alignItems: 'center', mt: 2, textAlign: 'start', width: '100%' }}>
          <IconButton>
            <IconifyIcon icon='pepicons-pop:star' fontSize={28} />
          </IconButton>
          <Typography variant='h2'>{t('star_scrumboard')}</Typography>
        </Box>
      ) : null}
      {starData.length > 0 ? (
        <Box sx={{ flexGrow: 1, m: 4 }}>
          <Grid container columns={{ xs: 4, sm: 8, md: 12 }} spacing={{ md: 8, sm: 6, xs: 4 }}>
            {data.length == 0 ? (
              <Typography sx={{ display: 'flex', justifyContent: 'center', fontSize: '20px', margin: '2rem' }}>
                {`${t('scrumboard_no_data')}`}
              </Typography>
            ) : (
              starData.map((data: ScrumboardType) => (
                <Grid item key={data.id} md={4} sm={4} xs={4}>
                  <ScrumboardCard data={data} setOpen={setOpen} setScrumboardEdit={setScrumboardEdit} />
                </Grid>
              ))
            )}
          </Grid>
        </Box>
      ) : null}

      <Box sx={{ display: 'flex', alignItems: 'center', mt: 6, textAlign: 'start', width: '100%' }}>
        <IconButton>
          <IconifyIcon icon='mingcute:trello-board-line' fontSize={28} />
        </IconButton>
        <Typography variant='h2'>{t('all_scrumboard')}</Typography>
      </Box>
      <Box sx={{ flexGrow: 1, m: 4 }}>
        <Grid container columns={{ xs: 4, sm: 8, md: 12 }} spacing={{ md: 8, sm: 6, xs: 4 }}>
          {data.length == 0 ? (
            <Typography sx={{ display: 'flex', justifyContent: 'center', fontSize: '20px', margin: '2rem' }}>
              {`${t('scrumboard_no_data')}`}
            </Typography>
          ) : (
            data.map((data: ScrumboardType) => (
              <Grid item key={data.id} md={4} sm={4} xs={4}>
                <ScrumboardCard data={data} setOpen={setOpen} setScrumboardEdit={setScrumboardEdit} />
              </Grid>
            ))
          )}
        </Grid>
      </Box>
    </Box>
  )
}

export default ScrumboardPage

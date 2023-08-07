import ButtonWithIcon from '@/core/components/button-with-icon'
import IconifyIcon from '@/core/components/icon'
import Search from '@/core/components/search'
import { scrumboardData } from '@/data/ScrumboardData'
import Translate from '@/services/common/translate'
import ScrumboardCard from '@/views/components/scrumboard/ScrumboardCard'
import CustomPageHeader from '@/views/pages/home/CustomPageHeader'
import { Box, Grid, IconButton, Typography } from '@mui/material'

const ScrumboardPage = () => {
  const data = scrumboardData
  const starData = scrumboardData.filter(item => item.star == true)
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
      <CustomPageHeader icon='mingcute:trello-board-line' pageTitle={`${Translate('dashboard')}`} type='mainPage'>
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
            name={`${Translate('all')}`}
            onClick={() => console.log('ok')}
          />
          <ButtonWithIcon sx={{ mr: 2 }} icon='gg:add' name={`${Translate('add')}`} />
        </Grid>
      </CustomPageHeader>
      {starData.length > 0 ? (
        <Box sx={{ display: 'flex', alignItems: 'center', mt: 2, textAlign: 'start', width: '100%' }}>
          <IconButton>
            <IconifyIcon icon='pepicons-pop:star' fontSize={18} />
          </IconButton>
          <Typography variant='h3' fontSize={16}>
            {Translate('star_scrumboard')}
          </Typography>
        </Box>
      ) : null}
      {starData.length > 0 ? (
        <Box
          sx={theme => ({
            display: 'flex',
            flexWrap: 'wrap',
            [theme.breakpoints.down('sm')]: { justifyContent: 'center' }
          })}
        >
          {data.length == 0 ? (
            <Typography sx={{ display: 'flex', justifyContent: 'center', fontSize: '20px', margin: '2rem' }}>
              {`${Translate('scrumboard_no_data')}`}
            </Typography>
          ) : (
            starData.map(data => <ScrumboardCard key={data.id} data={data} />)
          )}
        </Box>
      ) : null}

      <Box sx={{ display: 'flex', alignItems: 'center', mt: 6, textAlign: 'start', width: '100%' }}>
        <IconButton>
          <IconifyIcon icon='mingcute:trello-board-line' fontSize={18} />
        </IconButton>
        <Typography variant='h3' fontSize={16}>
          {Translate('all_scrumboard')}
        </Typography>
      </Box>
      <Box
        sx={theme => ({
          display: 'flex',
          flexWrap: 'wrap',
          [theme.breakpoints.down('sm')]: { justifyContent: 'center' }
        })}
      >
        {data.length == 0 ? (
          <Typography sx={{ display: 'flex', justifyContent: 'center', fontSize: '20px', margin: '2rem' }}>
            {`${Translate('scrumboard_no_data')}`}
          </Typography>
        ) : (
          data.map(data => <ScrumboardCard key={data.id} data={data} />)
        )}
      </Box>
    </Box>
  )
}

export default ScrumboardPage

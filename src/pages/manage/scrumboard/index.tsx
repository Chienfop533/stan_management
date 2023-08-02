import ButtonWithIcon from '@/core/components/button-with-icon'
import Search from '@/core/components/search'
import CustomPageHeader from '@/views/pages/home/CustomPageHeader'
import { Grid } from '@mui/material'

const ScrumboardPage = () => {
  return (
    <div>
      <CustomPageHeader icon='mingcute:trello-board-line' pageTitle='Bảng điều khiển'>
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
            name='Tất cả'
            onClick={() => console.log('ok')}
          />
          <ButtonWithIcon sx={{ mr: 2 }} icon='gg:add' name='Thêm' />
        </Grid>
      </CustomPageHeader>
    </div>
  )
}

export default ScrumboardPage

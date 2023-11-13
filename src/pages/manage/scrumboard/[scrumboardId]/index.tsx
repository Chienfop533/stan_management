import ButtonWithIcon from '@/core/components/button-with-icon'
import IconifyIcon from '@/core/components/icon'
import { hexToRGBA } from '@/core/utils/hex-to-rgba'
import MediaQuery from '@/core/utils/media-query'
import sortArray from '@/core/utils/sort-array'
import { useAppSelector } from '@/hooks/redux'
import ScrumboardList from '@/views/components/scrumboard/ScrumboardList'
import ScrumboardSettings from '@/views/components/scrumboard/ScrumboardSettings'
import CustomPageHeader from '@/views/pages/home/CustomPageHeader'
import { Box, Grid, Typography, styled } from '@mui/material'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { DragDropContext, DropResult, Droppable } from 'react-beautiful-dnd'

const ScrumboardContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  height: 'calc(100vh - 145px)',
  overflowY: 'hidden',
  overflowX: 'auto',
  display: '-webkit-inline-box',
  marginTop: '1rem',
  marginBottom: '-1rem',
  borderTop: `1px solid ${hexToRGBA(theme.palette.red.light, 0.4)}`,
  position: 'relative'
}))

const ScrumboardDetail = ({ scrumboardId }: { scrumboardId: string }) => {
  const { t } = useTranslation()
  const [openSideBar, setOpenSideBar] = useState<boolean>(false)
  const laptop = MediaQuery().laptop

  const data = useAppSelector(state => state.scrumboard.data)
  const dataActive = data.find(item => item.id == scrumboardId)
  const sortData = sortArray(dataActive?.list, dataActive?.listOrderIds, 'id')

  const handleClick = () => {
    setOpenSideBar(true)
  }
  const onDragEnd = (result: DropResult) => {
    const { destination, source } = result
    if (!destination) {
      return
    }
    if (source.droppableId === destination.droppableId && source.index === destination.index) {
      return
    }
    console.log(result)
  }
  return (
    <>
      <ScrumboardSettings openSideBar={openSideBar} setOpenSideBar={setOpenSideBar} scrumboardId={scrumboardId} />
      <Box
        sx={{
          marginRight: openSideBar && !laptop ? '234px' : 0,
          transition: theme =>
            theme.transitions.create('margin', {
              easing: theme.transitions.easing.easeOut,
              duration: theme.transitions.duration.enteringScreen
            })
        }}
      >
        <CustomPageHeader pageTitle={dataActive ? dataActive.title : t('scrumboard_detail')} type='subPage'>
          <Grid>
            <ButtonWithIcon
              sx={{ mr: 2 }}
              icon='clarity:filter-grid-circle-line'
              name={`${t('filter')}`}
              onClick={() => console.log('ok')}
            />
            <ButtonWithIcon sx={{ mr: 2 }} icon='uil:setting' name={`${t('setting')}`} onClick={handleClick} />
          </Grid>
        </CustomPageHeader>
        <ScrumboardContainer>
          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId='list' type='list' direction='horizontal'>
              {provided => (
                <Box sx={{ display: 'flex' }} ref={provided.innerRef}>
                  {sortData?.map((item, index) => (
                    <ScrumboardList key={item.id} listData={item} index={index} />
                  ))}
                  {provided.placeholder}
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
                          backgroundColor: theme =>
                            theme.palette.mode == 'light' ? theme.palette.grey[400] : theme.palette.grey[600]
                        }
                      }}
                    >
                      <IconifyIcon icon='gg:add' fontSize={24} />
                      <Typography sx={{ fontWeight: 600, height: 24, fontSize: 16, ml: 2 }}>
                        {t('add_another_list')}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              )}
            </Droppable>
          </DragDropContext>
        </ScrumboardContainer>
      </Box>
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

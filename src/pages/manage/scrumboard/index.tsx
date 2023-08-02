import ButtonWithIcon from '@/core/components/button-with-icon'
import CustomPageHeader from '@/views/pages/home/CustomPageHeader'

const ScrumboardPage = () => {
  return (
    <div>
      <CustomPageHeader icon='mingcute:trello-board-line' pageTitle='Bảng điều khiển'>
        <ButtonWithIcon
          sx={{ mr: 2 }}
          icon='clarity:filter-grid-circle-line'
          name='Tất cả'
          onClick={() => console.log('ok')}
        />
        <ButtonWithIcon sx={{ mr: 2 }} icon='gg:add' name='Thêm' />
      </CustomPageHeader>
    </div>
  )
}

export default ScrumboardPage
